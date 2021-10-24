import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { TasksFacade } from '@kdence-client/tasks/data-access';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UsersFacade } from '@kdence-client/users/data-access';
import { take, tap } from 'rxjs/operators';
import { TasksEntity } from '@kdence-client/tasks/models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'kdence-client-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TaskSearchComponent implements OnInit, OnDestroy {
  private tasksSubscription!: Subscription;
  private userSub!: Subscription;
  searchText = new FormControl('');
  private taskSet: TasksEntity[] = [];
  private tasksSubject = new BehaviorSubject<TasksEntity[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(
    private tasksFacade: TasksFacade,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.userSub = this.usersFacade.currentUser$
      .pipe(
        tap((user) => {
          if (user) {
            this.tasksFacade.fetchAllTasks(user);
          }
        })
      )
      .subscribe();

    this.tasksFacade.allTasks$
      .pipe(
        tap((tasks) => {
          this.taskSet = tasks;
          this.tasksSubject.next(tasks);
        })
      )
      .subscribe();
  }

  search() {
    this.tasksSubject.next(
      this.taskSet.filter(
        (task) =>
          task.description.toLowerCase().includes(this.searchText.value) ||
          task.description.includes(this.searchText.value)
      )
    );
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
    this.userSub.unsubscribe();
  }
}

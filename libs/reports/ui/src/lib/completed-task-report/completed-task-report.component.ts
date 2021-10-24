import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { TasksFacade } from '@kdence-client/tasks/data-access';
import { map, tap } from 'rxjs/operators';
import { UsersFacade } from '@kdence-client/users/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kdence-client-completed-task-report',
  templateUrl: './completed-task-report.component.html',
  styleUrls: ['./completed-task-report.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedTaskReportComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'description', 'value', 'completionDate'];
  completedTasks$ = this.tasksFacade.allTasks$.pipe(
    map((tasks) => tasks.filter((task) => task.completionDate !== null))
  );
  private currentUserSub?: Subscription;

  constructor(
    private tasksFacade: TasksFacade,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.currentUserSub = this.usersFacade.currentUser$
      .pipe(
        tap((user) => {
          if (user) this.tasksFacade.fetchAllTasks(user);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.currentUserSub?.unsubscribe();
  }
}

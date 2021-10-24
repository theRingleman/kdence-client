import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { TasksFacade } from '@kdence-client/tasks/data-access';
import { UsersFacade } from '@kdence-client/users/data-access';

@Component({
  selector: 'kdence-client-approved-task-report',
  templateUrl: './approved-task-report.component.html',
  styleUrls: ['./approved-task-report.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApprovedTaskReportComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'description', 'value', 'completionDate'];
  approvedTasks$ = this.tasksFacade.allTasks$.pipe(
    map((tasks) => tasks.filter((task) => !!task.approval))
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

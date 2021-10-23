import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksFacade } from '@kdence-client/tasks/data-access';
import { CreateTaskDto } from '@kdence-client/tasks/models';
import { UsersEntity, UsersFacade } from '@kdence-client/users/data-access';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'kdence-client-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent implements OnInit {
  goalId?: number;
  currentUser?: UsersEntity;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tasksFacade: TasksFacade,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => (this.goalId = Number(params.get('id')))
    );
    this.usersFacade.currentUser$
      .pipe(
        filter((user) => !!user),
        take(1)
      )
      .subscribe((user) => (this.currentUser = user!));
  }

  submitted(createTaskDto: CreateTaskDto) {
    if (this.goalId) {
      this.tasksFacade.createTask(this.goalId, {
        ...createTaskDto,
        value: createTaskDto.value * 100,
      });
    }
    this.router.navigate(['goals']);
  }
}

import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { TasksEntity } from '@kdence-client/tasks/models';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'kdence-client-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  displayedColumns = ['description', 'value', 'complete', 'approved'];
  @Input() tasks: TasksEntity[] = [];
  selection = new SelectionModel<TasksEntity>(true, []);
}

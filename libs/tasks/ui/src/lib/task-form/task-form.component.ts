import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksEntity } from '@kdence-client/tasks/models';
import { Subscription } from 'rxjs';
import { TaskControlService } from '@kdence-client/tasks/data-access';

@Component({
  selector: 'kdence-client-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private task!: TasksEntity;
  taskForm!: FormGroup;
  @Output() submittedEvent = new EventEmitter<TasksEntity>();

  constructor(
    private fb: FormBuilder,
    private taskControlService: TaskControlService
  ) {}

  ngOnInit(): void {
    this.subscription = this.taskControlService.selectedTask$.subscribe(
      (task) => {
        this.task = task;
        if (task.value !== 0) {
          this.taskForm = this.fb.group({
            description: [task.description, Validators.required],
            value: [task.value / 100, Validators.required],
          });
        } else {
          this.taskForm = this.fb.group({
            description: [task.description, Validators.required],
            value: [task.value, Validators.required],
          });
        }
      }
    );
  }

  submitted() {
    if (this.taskForm.valid) {
      this.submittedEvent.emit({
        ...this.task,
        ...this.taskForm.value,
        value: this.taskForm.value.value * 100,
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

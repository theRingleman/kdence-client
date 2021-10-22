import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'kdence-client-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit {
  taskForm = this.fb.group({
    description: ['', Validators.required],
    value: ['', Validators.required, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submitted() {
    console.log(this.taskForm.value);
  }
}

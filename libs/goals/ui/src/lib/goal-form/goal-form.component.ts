import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersEntity } from '@kdence-client/users/data-access';
import { CreateGoalDto } from '@kdence-client/goals/models';

@Component({
  selector: 'kdence-client-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalFormComponent {
  goalsForm = this.fb.group({
    name: ['', Validators.required],
    item: ['', Validators.required],
    completionValue: ['', Validators.required],
  });
  @Input() currentUser!: UsersEntity;
  @Output() submitted = new EventEmitter<CreateGoalDto>();

  constructor(private fb: FormBuilder) {}

  create() {
    if (this.goalsForm.valid) {
      this.submitted.emit({
        ...this.goalsForm.value,
        userId: this.currentUser.id,
      });
    }
  }
}

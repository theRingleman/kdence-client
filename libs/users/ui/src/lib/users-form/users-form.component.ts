import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateUserDto, Role } from '@kdence-client/users/data-access';

@Component({
  selector: 'kdence-client-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersFormComponent {
  @Output() createEvent = new EventEmitter<CreateUserDto>();

  usersForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    roleType: ['', Validators.required],
  });

  roles = [Role.Parent, Role.Child];

  constructor(private fb: FormBuilder) {}

  create() {
    if (this.usersForm.valid) {
      this.createEvent.emit({ ...this.usersForm.value });
    }
  }
}

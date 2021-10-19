import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { UsersEntity } from '@kdence-client/users/data-access';

@Component({
  selector: 'kdence-client-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdListComponent {
  displayedColumns = ['name', 'email', 'role'];
  @Input() users!: UsersEntity[];
}

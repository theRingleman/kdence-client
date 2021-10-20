import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CreateUserDto, UsersFacade } from '@kdence-client/users/data-access';
import { HouseholdsFacade } from '@kdence-client/households/data-access';
import { filter, first, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthFacade } from '@kdence-client/auth';

@Component({
  selector: 'kdence-client-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  constructor(
    private usersFacade: UsersFacade,
    private householdsFacade: HouseholdsFacade,
    private authFacade: AuthFacade,
    private router: Router
  ) {}

  addUser(dto: CreateUserDto) {
    this.usersFacade.currentUser$.pipe(take(1)).subscribe((currentUser) => {
      if (currentUser !== null) {
        this.usersFacade.createUser(currentUser!.household!.id, dto);
        this.router.navigate(['/households']);
      }
    });
  }
}

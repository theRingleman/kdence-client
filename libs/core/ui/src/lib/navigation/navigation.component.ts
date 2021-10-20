import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kdence-client-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Output() logoutEvent = new EventEmitter();
  @Input() loggedIn!: boolean | null;

  constructor(private router: Router) {}

  logout() {
    this.logoutEvent.emit();
    this.router.navigate(['auth/login']);
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from '../+state/auth.facade';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  isLoggedIn!: boolean;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authFacade.loggedIn$
      .pipe(take(1))
      .subscribe((loggedIn) => (this.isLoggedIn = loggedIn));

    if (!this.isLoggedIn) {
      this.router.navigate(['auth/login']);
    }

    return this.isLoggedIn;
  }
}

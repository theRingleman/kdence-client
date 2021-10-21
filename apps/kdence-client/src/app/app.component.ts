import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@kdence-client/auth';

@Component({
  selector: 'kdence-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {}
  title = 'kdence-client';

  ngOnInit(): void {
    this.authFacade.isLoggedIn();
  }
}

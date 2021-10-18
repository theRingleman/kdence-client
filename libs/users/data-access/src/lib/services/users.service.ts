import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse, UsersEntity } from '@kdence-client/users/data-access';
import { HttpClient } from '@angular/common/http';
import { loginRoute, profileRoute } from '@kdence-client/core/constants';
import { JwtService } from '@kdence-client/core/data-access';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}

  getUser(): Observable<UsersEntity> {
    return this.http.get<UsersEntity>(profileRoute());
  }

  login(email: string, password: string): Observable<void> {
    return this.http
      .post<LoginResponse>(loginRoute(), { email, password })
      .pipe(
        map((res) => {
          this.jwtService.saveToken(res.access_token);
        })
      );
  }
}

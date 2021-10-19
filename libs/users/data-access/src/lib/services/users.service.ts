import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserDto, LoginResponse, UsersEntity } from '../+state/';
import { HttpClient } from '@angular/common/http';
import {
  loginRoute,
  profileRoute,
  usersRoute,
} from '@kdence-client/core/constants';
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

  createUser(householdId: number, dto: CreateUserDto): Observable<UsersEntity> {
    return this.http.post<UsersEntity>(usersRoute(householdId), dto);
  }

  getHouseholdUsers(householdId: number): Observable<UsersEntity[]> {
    return this.http.get<UsersEntity[]>(usersRoute(householdId));
  }
}

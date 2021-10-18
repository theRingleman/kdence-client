import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  getToken(): string {
    return window.localStorage.getItem('token') ?? '';
  }

  saveToken(token: string): void {
    window.localStorage.setItem('token', token);
  }

  destroyToken(): void {
    window.localStorage.removeItem('token');
  }
}

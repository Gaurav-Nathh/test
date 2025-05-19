import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

interface LoginPayload {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://efactoapidevelopment.efacto.cloud/api';
  private apiKey = '140-9299-524-TEST';

  constructor(private router: Router, private http: HttpClient) {}

  login(payload: LoginPayload): Observable<any> {
    const headers = new HttpHeaders({
      code: this.apiKey,
    });

    return this.http
      .post(`${this.apiUrl}/Login/Authenticate`, payload, {
        headers,
      })
      .pipe(
        tap((response: any) => {
          if (response?.IsLogin) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem(
              'userId',
              response.userDetails?.UsrId?.toString() || ''
            );
          }
        })
      );
  }

  logout() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.clearSession();
      return;
    }
    const headers = new HttpHeaders({
      code: this.apiKey,
    });

    const logoutPlayload = {
      UsrId: parseInt(userId, 10),
    };
  }

  private clearSession() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userId');
    // localStorage.removeItem('userType');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}

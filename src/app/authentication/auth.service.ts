import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  app_url = ENVIRONMENT.api_url

  constructor(public http: HttpClient, public router: Router) { }
  registerData(data: any): Observable<any>{
    return this.http.post(`${this.app_url}/api/v1/register`, data)
  }

  loginData(data: any): Observable<any>{
    return this.http.post(`${this.app_url}/api/v1/login`, data).pipe(
      catchError(error => {
        if (error.status == 400){
          alert('Invalid Credentials')
        }
        return throwError(error)
      })
    )
  }

  // ngOnInit() {
  //   this.http.get('https://api.ipify.org?format=json')
  //     .subscribe((res: { ip: string }) => {
  //       console.log(res.ip);
  //     });
  // }
}

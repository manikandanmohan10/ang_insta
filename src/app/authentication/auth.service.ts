import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  app_url = ENVIRONMENT.api_url

  constructor(public http: HttpClient) { }
  registerData(data: any){
    this.http.post(`${this.app_url}/api/v1/register`, data)
  }
}

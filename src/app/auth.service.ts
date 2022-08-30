import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

 private baseURL = 'https://retoolapi.dev/4mHBLp/data';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.baseURL);
  }
}

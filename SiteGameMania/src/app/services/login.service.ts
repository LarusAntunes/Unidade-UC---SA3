import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:4200/login"
  
  constructor(private httpClient: HttpClient) { }

  login(usuario: User): Observable<any>{
    return this.httpClient.post(this.url, JSON.stringify(usuario), {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: "response"
    })
  }
                    // (o Observable é  um tipo de função assincrona)
}

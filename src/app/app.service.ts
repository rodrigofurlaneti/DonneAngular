import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  appService(userName: string) : Observable<any>{
    return this.http.get('https://localhost:7027/User/'+userName)
  }
}


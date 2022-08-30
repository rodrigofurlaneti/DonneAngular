import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  appService(user: UserModel) : Observable<any>{
    return this.http.get('https://localhost:7027/User/'+user.userName)
  }
}


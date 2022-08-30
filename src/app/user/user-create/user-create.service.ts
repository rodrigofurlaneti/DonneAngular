import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  constructor(private http: HttpClient) { }

  save(user: UserModel) : Observable<any>{
    return this.http.post<any>('https://localhost:7027/User', user)
  }

  listProfile() : Observable<any>{
    return this.http.get('https://localhost:7027/Profile')
  }

  listStore() : Observable<any>{
    return this.http.get('https://localhost:7027/Store')
  }

}

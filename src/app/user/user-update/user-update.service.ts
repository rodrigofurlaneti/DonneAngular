import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/interface/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserUpdateService {
  constructor(
    private httpClient: HttpClient
  ) {}

  private baseUrlProfile = 'https://localhost:7027/Profile';

  private baseUrl = 'https://localhost:7027/User';

  public list() : Observable<any>{
    return this.httpClient.get(this.baseUrl);

  }

  public listProfile() : Observable<any>{
    return this.httpClient.get(this.baseUrlProfile);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }

  public update(userModel: UserModel) {
    console.log(userModel);
    return this.httpClient.put(`${this.baseUrl}`, userModel);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';

@Injectable({
  providedIn: 'root'
})

export class ProfileUpdateService {
  constructor(
    private httpClient: HttpClient
  ) {}

  private baseUrl = 'https://localhost:7027/Profile';

  public list() : Observable<any>{
    return this.httpClient.get(this.baseUrl);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }

  public update(profileModel: ProfileModel) {
    console.log(profileModel);
    return this.httpClient.put(`${this.baseUrl}`, profileModel);
  }
}
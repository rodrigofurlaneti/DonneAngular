import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileCreateService {

  constructor(private http: HttpClient) { }

  save(profile: ProfileModel) : Observable<any>{
    return this.http.post<any>('https://localhost:7027/Profile', profile)
  }

}

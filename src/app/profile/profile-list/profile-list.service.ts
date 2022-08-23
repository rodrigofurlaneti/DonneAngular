import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';


@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get('https://localhost:7027/Profile')
  }
}

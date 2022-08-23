import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/interface/profile.interface';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProfileDeleteService {

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get('https://localhost:7027/Profile')
  }

  delete(id:number): Observable<any>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete('https://localhost:7027/Profile/'+id, options)
  }
}
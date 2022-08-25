import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreModel } from 'src/interface/store.interface';


@Injectable({
  providedIn: 'root'
})
export class StoreListService {

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get('https://localhost:7027/Store')
  }
}

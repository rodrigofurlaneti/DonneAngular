import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreModel } from 'src/interface/store.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreCreateService {

  constructor(private http: HttpClient) { }

  save(store: StoreModel) : Observable<any>{
    return this.http.post<any>('https://localhost:7027/Store', store)
  }

}

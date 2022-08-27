import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreModel } from 'src/interface/store.interface';

@Injectable({
  providedIn: 'root'
})

export class StoreUpdateService {
  constructor(
    private httpClient: HttpClient
  ) {}

  private baseUrl = 'https://localhost:7027/Store';

  public list() : Observable<any>{
    return this.httpClient.get(this.baseUrl);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }

  public update(storeModel: StoreModel) {
    console.log(storeModel);
    return this.httpClient.put(`${this.baseUrl}`, storeModel);
  }
}
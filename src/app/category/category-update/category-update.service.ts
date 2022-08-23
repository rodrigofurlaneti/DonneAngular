import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/interface/category.interface';

@Injectable({
  providedIn: 'root'
})

export class CategoryUpdateService {
  constructor(
    private httpClient: HttpClient
  ) {}

  private baseUrl = 'https://localhost:7027/Category';

  public list() : Observable<any>{
    return this.httpClient.get(this.baseUrl);

  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }

  public update(categoryModel: CategoryModel) {
    console.log(categoryModel);
    return this.httpClient.put(`${this.baseUrl}`, categoryModel);
  }
}
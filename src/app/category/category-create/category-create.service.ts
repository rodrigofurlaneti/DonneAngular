import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryCreateService {

  constructor(private http: HttpClient) { }

  save(category: CategoryModel) : Observable<any>{
    return this.http.post<any>('https://localhost:7027/Category', category)
  }

}

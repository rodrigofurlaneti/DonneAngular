import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryCreateService } from './category-create.service';
import { CategoryModel } from '../../../interface/category.interface';

@Component({
  selector: 'category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})

export class CategoryCreateComponent {

  constructor(private categoryCreateService: CategoryCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router) { }

  save() {
    var nameCategory = (<HTMLSelectElement>document.getElementById('nameCategory')).value;
    if(nameCategory != '')
    {
      var categoryModel = new CategoryModel();
      categoryModel.categoryName = nameCategory;
      this.categoryCreateService.save(categoryModel).subscribe(user => {
        this._snackBar.open('Categoria cadastrada com sucesso!', 'Voltar');
        this.router.navigate(['category-list']);
      }, err => {
          console.log('Erro ao adicionar a categoria!', err);
      })
    }
    if(nameCategory == '')
    {
      this._snackBar.open('Não está preenchido o campo nome da categoria!', 'Voltar');
    }

  }
  reply(){
    this.router.navigate(['main']);
  }
}





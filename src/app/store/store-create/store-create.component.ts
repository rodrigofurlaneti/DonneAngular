import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreCreateService } from './store-create.service';
import { StoreModel } from '../../../interface/store.interface';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})

export class StoreCreateComponent {

  constructor(private storeCreateService: StoreCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router) { }

  save() {
    var storeName = (<HTMLSelectElement>document.getElementById('storeName')).value;
    var storeCnpj = (<HTMLSelectElement>document.getElementById('storeCnpj')).value;
    var storeAddress = (<HTMLSelectElement>document.getElementById('storeAddress')).value;
    if(storeName != '' && storeCnpj != '' && storeAddress != '' )
    {
      var storeModel = new StoreModel();
      storeModel.storeName = storeName;
      storeModel.storeCnpj = storeCnpj;
      storeModel.storeAddress = storeAddress;
      storeModel.status = true;
      this.storeCreateService.save(storeModel).subscribe(store => {
        this._snackBar.open('Perfil cadastrada com sucesso!', 'Voltar');
        this.router.navigate(['store-list']);
      }, err => {
          console.log('Erro ao adicionar o perfil!', err);
      })
    }
    if(storeName == '')
    {
      this._snackBar.open('Não está preenchido o campo nome da loja!', 'Voltar');
    }
  }

  reply(){
    this.router.navigate(['main']);
  }
}





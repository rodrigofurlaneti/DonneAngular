import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router'; 
import { UserModel } from 'src/interface/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'Donne';

  user: UserModel;
  
  hide = true;

  access: boolean = false;

  constructor(private appService: AppService,
              private _snackBar: MatSnackBar,
              private router: Router) {
                this.user = new UserModel();
              }

  addStoreName(event: any)
  {
    this.user.store.storeName = event.target.value;
    console.log(this.user);
  }

  addUserName(event: any)
  {
    this.user.userName = event.target.value;
    console.log(this.user);
  }

  addUserPassword(event: any)
  {
    this.user.userPassword = event.target.value;
    console.log(this.user);
  }

  validar() {
    this.appService.appService(this.user).subscribe(userResp => {
    if(userResp.userName === null)
    {
      this._snackBar.open('Não existe este usuário cadastrado!', 'Voltar');
    }
    else if(this.user.store.storeName === '')
    {
      this._snackBar.open('Não está preenchido o campo nome da loja!', 'Voltar');
    }
    else if(this.user.userPassword === '')
    {
      this._snackBar.open('Não está preenchido o campo senha!', 'Voltar');
    }
    else if(this.user.store.storeName != userResp.store.storeName)
    {
      this._snackBar.open('Loja inválida!', 'Voltar');
    }
    else if(this.user.userPassword != userResp.userPassword)
    {
      this._snackBar.open('Senha inválida!', 'Voltar');
    }
    else if(this.user.userPassword === userResp.userPassword && 
        this.user.userName === userResp.userName &&
        this.user.store.storeName === userResp.store.storeName)
    {
      this.access = true;
      this.router.navigate(['/main']);
      this._snackBar.open('Acesso autorizado com sucesso!', 'Voltar');
    }
    }, err => {
      console.log('Erro autenticar o usuário', err);
    })
  }
}

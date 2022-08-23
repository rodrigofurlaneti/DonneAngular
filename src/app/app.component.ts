import { Component } from '@angular/core';
import { User } from 'src/model/user.model';
import { AppService } from './app.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Donne';
  hide = true;
  userId = 0;
  userName = "";
  expandedIndex = 0;
  private _snackBar: any;
  access: boolean = false;

  constructor(private appService: AppService,
              private router: Router) {}
   
  validar() {
    let user: User = new User();
    var userName = (<HTMLSelectElement>document.getElementById('userName')).value;
    var userPassword = (<HTMLSelectElement>document.getElementById('userPassword')).value;
    this.appService.appService(userName).subscribe(user => {
    if(user.userName === null)
    {
      this._snackBar.open('Não existe este usuário cadastrado!', 'Voltar');
    }
    if(user.userName === userName && user.userPassword != userPassword)
    {
      this._snackBar.open('Senha inválida!', 'Voltar');
    }
    if(user.userPassword === userPassword)
    {
      this.access = true;
      this.router.navigate(['/main']);
    }
    }, err => {
      console.log('Erro autenticar o usuário', err);
    })
  }
}

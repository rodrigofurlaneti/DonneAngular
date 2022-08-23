import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCreateService } from './user-create.service';
import { UserModel } from '../../../interface/user.interface';
import { FormControl } from '@angular/forms';
import { ProfileModel } from 'src/interface/profile.interface';
import { MatSelect } from '@angular/material/select';

let ELEMENT_DATA: ProfileModel[];

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['name'];

  disableSelect = new FormControl(false);
  
  profileId: number = 0;

  profileName: string = '';

  constructor(private userCreateService: UserCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router) { }

  @ViewChild('matSelect')
  matSelect!: MatSelect;
 
  onChangeofOptions(newGov: string) {
    console.log(newGov);
  }
	
  ngOnInit(): void {
    this.listProfile();
  }

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(obj => {
      this.profileId = obj.profileId;
      this.profileName = obj.profileName;
    });

}

  listProfile() {
    this.userCreateService.listProfile().subscribe(list => {
        ELEMENT_DATA = list;
        this.dataSource = ELEMENT_DATA;
        console.log(this.dataSource);
      }, err => {
        console.log('Erro ao listar os perfis', err);
      })
    }

  save() {
    var nameUser = (<HTMLSelectElement>document.getElementById('nameUser')).value;
    var passwordUser = (<HTMLSelectElement>document.getElementById('namePassword')).value;
    if(nameUser != '' && passwordUser != '')
    {
      var userModel = new UserModel();
      userModel.userName = nameUser;
      userModel.userPassword = passwordUser;
      userModel.profileId = this.profileId;
      userModel.profileName = this.profileName; 
      this.userCreateService.save(userModel).subscribe(user => {
        this._snackBar.open('Perfil cadastrada com sucesso!', 'Voltar');
        this.router.navigate(['user-list']);
      }, err => {
          console.log('Erro ao adicionar o perfil!', err);
      })
    }
    if(nameUser == '')
    {
      this._snackBar.open('Não está preenchido o campo nome do usuario!', 'Voltar');
    }
    if(passwordUser == '')
    {
      this._snackBar.open('Não está preenchido o campo senha do usuario!', 'Voltar');
    }
  }

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<ProfileModel>();
  
  reply(){
    this.router.navigate(['main']);
  }
}





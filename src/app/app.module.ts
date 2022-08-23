import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main/main.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryCreateModule } from './category/category-create/category-create.module';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';

import { ProfileCreateComponent } from './profile/profile-create/profile-create.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDeleteComponent } from './profile/profile-delete/profile-delete.component';
import { ProfileUpdateComponent } from './profile/profile-update/profile-update.component';

import { UserListComponent } from './user/user-list/user-list.component';

import { UserCreateComponent } from './user/user-create/user-create.component';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CdkAccordionModule } from '@angular/cdk/accordion';

import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip'

import { ProfileCreateModule } from './profile/profile-create/profile-create.module';
import { ProfileDeleteModule } from './profile/profile-delete/profile-delete.module';
import { ProfileListModule } from './profile/profile-list/profile-list.module';
import { ProfileUpdateModule } from './profile/profile-update/profile-update.module';
import { UserCreateModule } from './user/user-create/user-create.module';
import { UserListModule } from './user/user-list/user-list.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    CategoryListComponent,
    CategoryDeleteComponent,
    ProfileCreateComponent,
    ProfileDeleteComponent,
    ProfileListComponent,
    ProfileUpdateComponent,
    UserCreateComponent,
    UserListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    CdkAccordionModule,
    CategoryCreateModule,
    ProfileCreateModule,
    ProfileDeleteModule,
    ProfileListModule,
    ProfileUpdateModule,
    HttpClientModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    UserCreateModule,
    UserListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

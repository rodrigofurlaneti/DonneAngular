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

import { StoreCreateComponent } from './store/store-create/store-create.component';

import { ProfileCreateComponent } from './profile/profile-create/profile-create.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDeleteComponent } from './profile/profile-delete/profile-delete.component';
import { ProfileUpdateComponent } from './profile/profile-update/profile-update.component';

import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

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
import { MatCheckboxModule } from '@angular/material/checkbox'

import { StoreCreateModule } from './store/store-create/store-create.module';
import { StoreDeleteComponent } from './store/store-delete/store-delete.component';
import { StoreListComponent } from './store/store-list/store-list.component';

import { ProfileCreateModule } from './profile/profile-create/profile-create.module';
import { ProfileDeleteModule } from './profile/profile-delete/profile-delete.module';
import { ProfileListModule } from './profile/profile-list/profile-list.module';
import { ProfileUpdateModule } from './profile/profile-update/profile-update.module';

import { UserCreateModule } from './user/user-create/user-create.module';
import { UserDeleteModule } from './user/user-delete/user-delete.module';
import { UserListModule } from './user/user-list/user-list.module';
import { UserUpdateModule } from './user/user-update/user-update.module';

import { StoreListModule } from './store/store-list/store-list.module';
import { StoreDeleteModule } from './store/store-delete/store-delete.module';
import { StoreUpdateComponent } from './store/store-update/store-update.component';
import { StoreUpdateModule } from './store/store-update/store-update.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    CategoryListComponent,
    CategoryDeleteComponent,
    StoreCreateComponent,
    StoreDeleteComponent,
    StoreListComponent,
    StoreUpdateComponent,
    ProfileCreateComponent,
    ProfileDeleteComponent,
    ProfileListComponent,
    ProfileUpdateComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserListComponent,
    UserUpdateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    CdkAccordionModule,
    CategoryCreateModule,
    StoreCreateModule,
    StoreDeleteModule,
    StoreListModule,
    StoreUpdateModule,
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
    MatCheckboxModule,
    UserCreateModule,
    UserDeleteModule,
    UserListModule,
    UserUpdateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

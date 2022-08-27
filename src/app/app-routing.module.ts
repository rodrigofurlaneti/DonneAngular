import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';

import { StoreCreateComponent } from './store/store-create/store-create.component';
import { StoreDeleteComponent } from './store/store-delete/store-delete.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { StoreUpdateComponent } from './store/store-update/store-update.component';

import { ProfileCreateComponent } from './profile/profile-create/profile-create.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDeleteComponent } from './profile/profile-delete/profile-delete.component';
import { ProfileUpdateComponent } from './profile/profile-update/profile-update.component';

import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'main', component: MainComponent },
  { path: 'category-create', component: CategoryCreateComponent },
  { path: 'category-delete', component: CategoryDeleteComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-update', component: CategoryUpdateComponent },
  { path: 'store-create', component: StoreCreateComponent },
  { path: 'store-delete', component: StoreDeleteComponent },
  { path: 'store-list', component: StoreListComponent },
  { path: 'store-update', component: StoreUpdateComponent },
  { path: 'profile-create', component: ProfileCreateComponent },
  { path: 'profile-delete', component: ProfileDeleteComponent },
  { path: 'profile-list', component: ProfileListComponent },
  { path: 'profile-update', component: ProfileUpdateComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-update', component: UserUpdateComponent },
  { path: 'user-delete', component: UserDeleteComponent },
  { path: 'user-list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

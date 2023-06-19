import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./form-login/register/register.component";
import {LoginComponent} from "./form-login/login/login.component";
import {DadComponent} from "./input-output/@Input/dad/dad.component";
import {DadOutputComponent} from "./input-output/@output/dad-output/dad-output.component";
import {ChangeAvatarComponent} from "./form-login/change-avatar/change-avatar.component";
import {ListCategoryComponent} from "./content/category/list-category/list-category.component";
import {PageSongComponent} from "./content/song/page-song/page-song.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'input', component: DadComponent},
  {path: 'output', component: DadOutputComponent},
  {path: 'change-avatar', component: ChangeAvatarComponent},
  {path: 'category', component: ListCategoryComponent},
  {path: 'page-song', component: PageSongComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ToyComponent } from './toy/toy.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "toy",
    component: ToyComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

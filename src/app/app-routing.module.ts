import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'reset',component:RestpasswordComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'produit',component:ProduitComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

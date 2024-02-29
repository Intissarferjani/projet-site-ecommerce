import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { CartComponent } from './cart/cart.component';
import { environment } from 'src/environnements/environement';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RestpasswordComponent,
    HomeComponent,
    ProduitComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

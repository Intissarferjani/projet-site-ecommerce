import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserData: any;
  ngZone: any;
  router: any;

  constructor(private auth: Auth,public ngZone: NgZone) {
    onAuthStateChanged(this.auth,(user: any)=>{
      if(user){
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
   }

   
    //Register Method
    Register(email : string, password : string) {
      return createUserWithEmailAndPassword(this.auth, email, password).then((result: { user: any; }) => {
        this.UserData = result.user;
        this.ngZone.run(() => {
           /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
          this.sendEmailVerification()
          this.router.navigate(['/']);
        });
      })
      .catch((error: { message: any; }) => {
        window.alert(error.message);
      });
    }
  auth(auth: any, email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  sendEmailVerification() {
    throw new Error('Method not implemented.');
  }


    //Login Method
    Login(email : string, password : string){
      return signInWithEmailAndPassword(this.auth, email, password).then((result: any) => {
        this.UserData = result.user;
        this.ngZone.run(() => {
          this.router.navigate(['/register']);
        });
      })
      .catch((error: { message: any; }) => {
        window.alert(error.message);
      });
    }

 

}
function createUserWithEmailAndPassword(auth: any, email: string, password: string) {
  throw new Error('Function not implemented.');
}

function signInWithEmailAndPassword(auth: any, email: string, password: string) {
  throw new Error('Function not implemented.');
}

function onAuthStateChanged(auth: Auth, arg1: (user: any) => void) {
  throw new Error('Function not implemented.');
}


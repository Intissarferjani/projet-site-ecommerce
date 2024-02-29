import { Component, OnInit } from '@angular/core';
import { AuthService } from'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName: any;
userPassword: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {}
}

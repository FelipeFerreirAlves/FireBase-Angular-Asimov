import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp(user: User, password: string){
    this.authService.SignUp(user, password);
  }

  Return(){
    this.router.navigate(['']);
  }

}

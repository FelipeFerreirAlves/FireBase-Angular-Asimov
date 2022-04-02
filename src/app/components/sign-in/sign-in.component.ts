import{Router} from '@angular/router';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.router.navigate(['sign-up']);
  }

  signIn(user: User, password: string){
    this.authService.SignIn(user.email, password);
  }
}

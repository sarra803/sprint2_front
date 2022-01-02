import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
//import { AuthService } from '../services/auth.service';
//import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;


 
    constructor(private authService : AuthService,
      private router: Router)  { }

  ngOnInit(): void {
  }
  
  /*err:number = 0;
  onLoggedin()
  {
  this.authService.login(this.user).subscribe((data)=> {
  let jwToken = data.headers.get('Authorization');
  this.authService.saveToken(jwToken);
  this.router.navigate(['/']);
  }
  ,(err)=>{ this.err = 1;
  });
  }*/
  
  onLoggedin()
  {
  console.log(this.user);
  let isValidUser: Boolean = this.authService.SignIn(this.user);
if (isValidUser)
this.router.navigate(['/']);
else
this.erreur = 1;
  }
}
  



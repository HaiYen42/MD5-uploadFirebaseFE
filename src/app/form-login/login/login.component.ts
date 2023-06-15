import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {SignInForm} from "../../model/SignInForm";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
hide = true;
form:any = {};
signInForm?: SignInForm;
status = 'Please fill in the form to login!'
constructor(private authService: AuthService,
            private tokenService: TokenService,
            private router: Router) {
}
  login() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    console.log('signInForm --->', this.signInForm)
    this.authService.signIn(this.signInForm).subscribe(data =>{
      console.log('data --->', data)
      // @ts-ignore
      if(data.status==202){
        this.status = 'Login failed! Please check your account!'
      } else {
        // @ts-ignore
        this.tokenService.setName(data.name);
        // @ts-ignore
        this.tokenService.setAvatar(data.avatar);
        // @ts-ignore
        this.tokenService.setToken(data.token);
        // @ts-ignore
        this.tokenService.setRole(data.roles);
        this.router.navigate(['']).then(()=>{
          window.location.reload();
        })
      }
    })
  }

  ngOnInit(): void {
  if(this.authService.getRegister()){
    this.status = 'Register success! --> Fill account in the form to login'
  }
  }
}

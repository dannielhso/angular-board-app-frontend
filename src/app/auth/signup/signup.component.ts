import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/common/user-role.enum';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: false,
})
export class SignUpComponent implements OnInit {
  username: string = '';
  password: string = '';
  passwordConfirm: string = '';
  email: string = '';
  role:UserRole = UserRole.USER;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {}

  async onSignUp() {
    const signUpData = {
      username: this.username,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      email: this.email,
      role: this.role,
    };
    console.log('Sign Up Data:', signUpData);
    try {
      const response = await this.authService.signUp(signUpData);
      if (!response.success) {
        console.log(response);
        this.router.navigate(['auth']);
      } else {
        console.log('Sign Up Failed', response.message);
      }
    } catch (error) {
      console.log('Sign Up Error', error);
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/common/user-role.enum';

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
  role: UserRole = UserRole.USER;

  constructor() {}

  ngOnInit() {}

  onSignUp() {
    const signUpData = {
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role,
    };
    console.log('Sign Up Data:', signUpData);
  }
}
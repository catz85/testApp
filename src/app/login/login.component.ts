import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthenticationService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading: boolean = false;
  public user: {username: string, password: string} = {
    username: '',
    password: ''
  }
  public errorText: string;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  onSignin() {
    this.errorText = ''
    this.loading = true;
    this.authService.login(this.user.username, this.user.password).subscribe(() => {
      this.router.navigate(['/products'])
    }, (errorText) => {
      this.errorText = errorText
      this.loading = false;
    })
  }
}

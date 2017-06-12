import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(public router: Router, private http:Http) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username:new FormControl(""),
      password:new FormControl("")
    });
  }

  login(event:MouseEvent) {
    event.preventDefault();

    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    let body = JSON.stringify({username, password});
    
    this.http.post('http://localhost:8080/auth', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().token); // keep it as id_token
          this.router.navigate(['dashboard']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
    )
  }

}

export class loginClass {
  username: string;
  password: number;
}
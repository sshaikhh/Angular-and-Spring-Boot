import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='shadab'
  password ="abcde" 

  constructor() { }

  ngOnInit(): void {
  }

  handlelogin()
  {
    console.log(this.username);
    console.log(this.password);
  }
}

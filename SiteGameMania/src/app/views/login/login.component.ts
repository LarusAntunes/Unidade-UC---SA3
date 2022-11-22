import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {    
  }

  userModel = new User();
 
  receberDados() {
    console.log(this.userModel)

    this.loginService.login(this.userModel).subscribe ( (response) => {
      console.log("Deu certo")
    }, (erro) => {
      console.log( "Deu erro")
    })
  }

}

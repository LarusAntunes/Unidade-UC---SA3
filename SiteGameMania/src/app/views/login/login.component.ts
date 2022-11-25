import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {    
  }

  userModel = new User();

  mensagem=""
 
  receberDados() {
  // onSubmit(){
    console.log(this.userModel)

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      if(this.userModel.email?.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos"

        return;
      }
    });

    this.loginService.login(this.userModel).subscribe( (response) => {
      console.log("Deu certo")
      localStorage.setItem("nomeUsuario", response.body.user.nome)

      // this.router.navigateByUrl("/")
    }, (respostaErro) => {
      console.log( "Deu erro")
      this.mensagem = respostaErro.error

      if (respostaErro.error == "Password is too short") {
        this.mensagem = "Senha muito curta"
      } else {
        this.mensagem = respostaErro.error
      }
      // alert("ERRO")
    })
  }

}

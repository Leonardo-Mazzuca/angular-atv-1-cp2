import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = ""
  password = ""
  errorMsg = ""

  changeEmail (e:Event) {

    const email = (e.target as HTMLInputElement).value

    if(email.length <= 6 ) {
      alert ( "O email precisa ter mais de 6 caracteres!" )
      return;
    }

    if(!email.includes("@")) {
      alert( "O email é inválido!" )
      return;
    }

    this.email = email
  }

  changePassword (e:Event) {
    this.password = (e.target as HTMLInputElement).value
  }

  submitForm (e:Event) {
    e.preventDefault();

    if(this.email === '' || this.password === '') {
      alert( "Campos são obrigatórios!")
      return
    }

    if(this.email !== "user@gmail.com" || this.password !== "123456") {
      alert( "Dados inválidos!" )
      return;
    }


    alert("Cadastrado com sucesso!")


  }


}

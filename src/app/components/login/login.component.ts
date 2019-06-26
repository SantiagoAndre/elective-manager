import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user'
import { SendTokenService } from '../../services/send-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  	user:String = "";
  	constructor(private sendTokenService: SendTokenService) {
  	}
  ngOnInit() {
  }
  login(){
    //this.iniciar.iniciarSesion(this.usuario).suscribe(rest => {alert(rest)});

    alert(this.sendTokenService.send(this.user));

  }
}

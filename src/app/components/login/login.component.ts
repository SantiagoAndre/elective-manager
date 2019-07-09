import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user'
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  	user:any = "";
  	constructor(private sesion: SesionService) {
  	}
  ngOnInit() {
  }
  login(){
    //this.iniciar.iniciarSesion(this.usuario).suscribe(rest => {alert(rest)});

    alert(this.sesion.getToken(this.user));

  }
}

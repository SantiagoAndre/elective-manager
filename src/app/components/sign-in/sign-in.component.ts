import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { User } from '../../interface/user'
import { SesionService } from '../../services/sesion.service';
@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	user: any = {};
	constructor(private sesion: SesionService) {
	}

	ngOnInit() {
	}
  signIn(){
    this.sesion.login(this.user).subscribe(rest => {alert(rest)});
    //console.log(this.sesion.login(this.user));

  }

}

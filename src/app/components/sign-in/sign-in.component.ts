import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	user: any = {};
	constructor(private sesion: SesionService,
	 private router:Router) {
	}

	public isError = false;
	public isErrorData = false;

	ngOnInit() {
	}

	signIn(form: NgForm){

		//console.log(form);
		if(form.valid){

			this.sesion.login(this.user)
			.subscribe(
				data =>{
					this.sesion.setUser(data);
					this.router.navigate(['/secretaria']);
				},
				error => this.onIsErrorData()
			);
			//this.sesion.login(this.user);
			//this.isError = false;
		}
		else{
			this.onIsError();
		}

		//this.sesion.login(this.user).subscribe(rest => {alert(rest)});

	}

	onIsError(): void{
		/*alert("ups datos erroneos");*/
		this.isError = true;
		setTimeout(() =>{
			this.isError = false;
		}, 4000)
	}

	onIsErrorData(): void{
		this.isErrorData = true;
		setTimeout(() =>{
			this.isErrorData = false;
		}, 4000)
	}

	triggerAlert(){
		
	}

}

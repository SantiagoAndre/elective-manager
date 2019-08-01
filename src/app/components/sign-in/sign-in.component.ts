import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

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
		}
		else{
			this.onIsError();
		}
	}

	onIsError(): void{
		Swal.fire({
			title: 'Error!',
			text: 'Debes llenar todos los campos',
			type: 'error'
		});
	}

	onIsErrorData(): void{
		Swal.fire({
			title: 'Error!',
			text: 'Los datos son incorrectos',
			type: 'error'
		});
	}

}

import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { User } from '../../interface/user'
import { SignInService } from '../../services/sign-in.service';
@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	user: any = {};
	constructor(private signInService: SignInService) {
	}

	ngOnInit() {
	}
  signIn(){
    this.signInService.signInService(this.user).subscribe(rest => {alert(rest)});
    //console.log(this.signInService.signInService(this.user));

  }

}

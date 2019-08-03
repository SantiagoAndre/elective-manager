import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { SendAvailableScheduleService } from '../../../services/profesor/send-available-schedule.service';
import {ScheduleComponent} from '../../schedule/schedule.component'
@Component({
	selector: 'app-choose-available-schedule',
	templateUrl: './choose-available-schedule.component.html',
	styleUrls: ['./choose-available-schedule.component.css']
})
export class ChooseAvailableScheduleComponent implements OnInit {
	days:any=[];
	blocks:any=[];
	validSchedule:any=[];
	constructor(private sendSchedule: SendAvailableScheduleService) {



	}
recibirlista($event){
	console.log(event);
}
	ngOnInit() {
		this.loadSchedule();
	}


	loadSchedule() {
		this.days = [ "Lunes", "Martes", "Miercoles", "Jueves","Viernes"];
		this.blocks = ['7-9','9-11','11-1','1-2','2-4','4-6','6-8'];
		this.validSchedule = [[0,0],[	1,1],[2,2],[4,4]];
	}

	save() {

		//if (this.schedule.length != 0) {
		//	alert(this.sendSchedule.send(this.schedule));
	//	}

	}

}

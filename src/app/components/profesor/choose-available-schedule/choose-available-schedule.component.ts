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

	user: any = {};

	constructor(private sendSchedule: SendAvailableScheduleService) {
@input() infohijo:any;


	}

	ngOnInit() {
	}




	save() {

		//if (this.schedule.length != 0) {
		//	alert(this.sendSchedule.send(this.schedule));
	//	}

	}

}

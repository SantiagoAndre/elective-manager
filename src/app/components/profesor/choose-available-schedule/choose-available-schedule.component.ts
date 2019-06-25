import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
	selector: 'app-choose-available-schedule',
	templateUrl: './choose-available-schedule.component.html',
	styleUrls: ['./choose-available-schedule.component.css']
})
export class ChooseAvailableScheduleComponent implements OnInit {

	user: any = {};
	htmlSchedule: String = ``;


	constructor() {
		this.loadSchedule();


	}

	ngOnInit() {
	}
	setSchedule(day,block){
		console.log("elegir el bloque"+block+" del dia ",day)
	}
	loadSchedule() {
		var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
		var blocks = 6;
		for (var day in days) {
			this.htmlSchedule += "<div class=day>\n";
			this.htmlSchedule += '   <h3 class="dayText">' + days[day] + '</h3>\n';
			for (var block = 0; block < blocks; block++) {
				this.htmlSchedule += '   <div class="block" (click) = \'setSchedule("' + days[day] + '","' + block + '")\' height=20></div>\n';
			}

			this.htmlSchedule += "</div>\n";
		}
    console.log(this.htmlSchedule);
	}

}

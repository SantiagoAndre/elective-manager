import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SendAvailableScheduleService } from '../../../services/profesor/send-available-schedule.service';
@Component({
	selector: 'app-choose-available-schedule',
	templateUrl: './choose-available-schedule.component.html',
	styleUrls: ['./choose-available-schedule.component.css']
})
export class ChooseAvailableScheduleComponent implements OnInit {

	user: any = {};
	htmlSchedule: String = ``;
	schedule: any = [];
	days: any = [];
	blocks: any = [];

	constructor(private sendSchedule: SendAvailableScheduleService) {



	}

	ngOnInit() {
			this.loadSchedule();
	}
	setSchedule(day, block) {
		console.log("elegir el bloque " + block + " del dia ", day);
		var index = 0;
		var found = false;
		for (var s in this.schedule) {
			//console.log(day + "==" + this.schedule[s][0] + " and " + this.schedule[s][1] + " == " + block);
			if (this.schedule[s][0] == day && this.schedule[s][1] == block) {
				found = true;
				break;
			}
			index += 1;
		}
		if (found) {
			console.log("found");
			this.schedule.splice(index, 1);
		} else {
			console.log("not found");
			this.schedule.push([day, block]);
		}

		console.log(this.schedule);
	}
	loadSchedule1() {
		var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
		var blocks = 6;
		for (var day in days) {
			this.htmlSchedule += "<div class=day>\n";
			this.htmlSchedule += '   <h3  class= "dayText">' + days[day] + '</h3>\n'
			for (var block = 0; block < blocks; block++) {
				this.htmlSchedule += '   <div [ngClass] = \'getBlockClass(' + day + ',' + block + ')\' class="block" (click) = \'setSchedule(' + day + ',' + block + ')\' height=20></div>\n';
			}

			this.htmlSchedule += "</div>\n";
		}
		console.log(this.htmlSchedule);
	}

	loadSchedule() {
		this.days = [ "Lunes", "Martes", "Miercoles", "Jueves","Viernes"];
		this.blocks = ['7-9','9-11','11-1',null,'2-4','4-6','6-8'];

	}
	getBlockClass(day, block) {
		var found = false;
		for (var s in this.schedule) {
			//console.log(day + "==" + this.schedule[s][0] + " and " + this.schedule[s][1] + " == " + block);
			if (this.schedule[s][0] == day && this.schedule[s][1] == block) {
				found = true;
				break;
			}

		}

		return { select_block: found, unselect_block: !found };
	}
	save() {
		if (this.schedule.length != 0) {
			alert(this.sendSchedule.send(this.schedule));
		}

	}

}

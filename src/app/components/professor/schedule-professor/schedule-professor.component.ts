import { Component, OnInit,ViewChild} from '@angular/core';
import { NgModule } from '@angular/core';
	import { ProfessorService } from '../../../services/professor.service';
import {ScheduleComponent} from '../../schedule/schedule.component'
@Component({
	selector: 'app-schedule-professor',
	styleUrls: ['./schedule-professor.component.css'],
	templateUrl: './schedule-professor.component.html'
})
export class ScheduleProfessorComponent implements OnInit {
	@ViewChild(ScheduleComponent,{static: true}) scheduleView : ScheduleComponent;
	schedule:string[][];
	validSchedule:string[][];
	constructor(private professorService: ProfessorService) {



	}
 receiveSchedule($event){
	 this.schedule = $event;
	 this.send();
}
	ngOnInit() {
		this.schedule = this.getSchedule();
		this.validSchedule = this.getValidSchedule();
	}
	getSchedule(){
		//this.professorService.getSchedule(this.professorId);
		return [["Jueves", "11-1"],["Viernes", "9-11"],["Lunes", "9-11"],["Martes", "9-11"],["Miercoles", "11-1"],["Miercoles", "2-4"]];
	}
	setSchedule(){
		if(!this.scheduleView.isChange()){
			this.schedule = [];
			this.validSchedule=  [["Jueves", "11-1"],["Viernes", "9-11"],["Lunes", "7-9"],["Lunes", "9-11"],["Martes", "9-11"],["Miercoles", "11-1"],["Miercoles", "2-4"],["Viernes", "2-4"]];

		}else{
				console.log("// WARNING: changes in actual schedule");
		}
	}
	getValidSchedule(){
			//return this.professorService.getLabSchedule(this.professorId);
		return [["Jueves", "11-1"],["Viernes", "9-11"],["Lunes", "7-9"],["Lunes", "9-11"],["Martes", "9-11"],["Martes", "11-1"],["Miercoles", "11-1"],["Miercoles", "2-4"],["Viernes", "2-4"]];
		//return [[0,0],[	1,1],[2,2],[4,4],[1,0],[2,0],[3,0]];
	}
	send() {
		this.professorService.sendSchedule(this.schedule);

		//if (this.schedule.length != 0) {
		//	alert(this.professorService.send(this.schedule));
	//	}

	}

}

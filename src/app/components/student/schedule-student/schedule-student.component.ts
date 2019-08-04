import { Component, OnInit,ViewChild} from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { StudentService } from '../../../services/student.service';
import {ScheduleComponent} from '../../schedule/schedule.component'
@Component({
	selector: 'app-schedule-student',
	styleUrls: ['./schedule-student.component.css'],
	templateUrl: './schedule-student.component.html'
})
export class ScheduleStudentComponent implements OnInit {
	@ViewChild(ScheduleComponent,{static: false}) scheduleView : ScheduleComponent;
	schedule:string[][];
	validSchedule:string[][];
	electives:any;
	select_elective:any;
	constructor(private studentService: StudentService,
		private activedRoute: ActivatedRoute,
	 	private router: Router) {



	}
 receiveSchedule($event){
	 this.schedule = $event;

	 this.send();
}
	ngOnInit() {
		if(!this.studentService.setToken(this.activedRoute.snapshot.params.token)){
				this.router.navigate(['electives']);
		}
		this.schedule = null;
		this.electives =  this.getElectives();
		//this.validSchedule = this.getValidSchedule();

	}
	getElectives(){
		return this.studentService.getElectives();
	}
	getElective(){
		return this.studentService.getElective();
	}
	getSchedule(){
		return this.studentService.getSchedule();
		//return [["Jueves", "11-1"],["Viernes", "9-11"],["Lunes", "9-11"],["Martes", "9-11"],["Miercoles", "11-1"],["Miercoles", "2-4"]];

	}
	selectElective(idElective){
		if(this.schedule == null || !this.scheduleView.isChange()||confirm("No has guadado los horarios de #{{this.elective.name}}, desea descartarlos?")){
			//this.schedule = this.studentService.getSchedule(idElective);
			this.studentService.selectElective(idElective);
			this.schedule = this.getSchedule();
			this.validSchedule=  [["Jueves", "11-1"],["Viernes", "9-11"],["Lunes", "7-9"],["Lunes", "9-11"],["Martes", "9-11"],["Miercoles", "11-1"],["Miercoles", "2-4"],["Viernes", "2-4"]];
		}else{
				console.log("// WARNING: changes in actual schedule");
		}
	}
	getValidSchedule(){
			//return this.studentService.getLabSchedule(this.studentId);
		return [["Jueves", "11-1"],["Viernes", "9-11"],["Lunes", "7-9"],["Lunes", "9-11"],["Martes", "9-11"],["Martes", "11-1"],["Miercoles", "11-1"],["Miercoles", "2-4"],["Viernes", "2-4"]];
		//return [[0,0],[	1,1],[2,2],[4,4],[1,0],[2,0],[3,0]];
	}
	send() {
		this.studentService.sendSchedule(this.schedule);

		//if (this.schedule.length != 0) {
		//	alert(this.studentService.send(this.schedule));
	//	}

	}
	getElectiveClass(idElective){
		var elective = this.getElective();
		var select = false;
		if(elective != null){
				select = elective.idElective == idElective;
				console.log(idElective+" == "+elective.idElective+" = "+select);
		}
		return {  select_elective: select, unselect_elective: !select};
	}

}

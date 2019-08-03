import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
@Output() messageEvent = new EventEmitter<string[][]>();
@Input() days : string[];
@Input() blocks: string[];
@Input() validSchedule: string[];
@Input() schedule:string[][];
localSchedule:string[][];

//@Output outEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    if(this.schedule==null){
      this.localSchedule=[];
    }else{
      this.localSchedule=this.schedule;
    }
    if(this.days == null){
      this.days = this.getDays();
    }
    if(this.blocks==null){
      this.blocks = this.getBLocks();
    }
    if(this.validSchedule == null){
        this.validSchedule = this.getValidSchedule();
    }
  }
  getValidSchedule(){
    var schedule = [];
    for(let day of this.days){
      for(let block of this.blocks){
        if(block != "1-2"){
          schedule.push([day, block]);
        }
      }
    }
    return schedule;
  }
	getDays(){
		return [ "Lunes", "Martes", "Miercoles", "Jueves","Viernes"];
	}
	getBLocks(){
		return ['7-9','9-11','11-1','1-2','2-4','4-6','6-8'];
	}

  sendSchedule(){
    //this.outEvent.emit(this.schedule);
  }

  save(){
    console.log("Enviando");
    this.messageEvent.emit(this.localSchedule)
  }
  find(day, block,schedule){
    if(schedule == null){
      return true;
    }
    var index = 0;
    for (var s in schedule) {
      //console.log(day + "==" + this.schedule[s][0] + " and " + this.schedule[s][1] + " == " + block);
      if (schedule[s][0] == day && schedule[s][1] == block) {
        return  index;
      }
      index += 1;

    }
    return -1;
  }
  getBlockClass(day, block) {
    var valid = this.find(day,block,this.validSchedule)!=-1;
    var found = false;
    if(valid){
		    found = this.find(day,block,this.localSchedule)!=-1;
    }
		return {  valid_block: valid&&!found , invalid_block: !valid,select_block: found};
	}
  setSchedule(day, block) {
    console.log("elegir el bloque " + block + " del dia ", day);

    if(this.find(day,block,this.validSchedule)== -1){
      console.log("Invalid");
      return;
    }

    var index = this.find(day,block,this.localSchedule);
    var found = index!= -1;
    if (found) {
      console.log("found");
      this.localSchedule.splice(index, 1);
    } else {
      console.log("not found");
      this.localSchedule.push([day, block]);
    }

    console.log(this.localSchedule);
  }

}

import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
@Output() messageEvent = new EventEmitter<number[][]>();
@Input() days : string[];
@Input() blocks: string[];
@Input() validSchedule: number[];
schedule:number[][];


//@Output outEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.schedule=[];
  }
  sendSchedule(){
    //this.outEvent.emit(this.schedule);
  }

  save(){
    console.log("Enviando");
    this.messageEvent.emit(this.schedule)
  }
  find(day, block,schedule){
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
		    found = this.find(day,block,this.schedule)!=-1;
    }
		return {  valid_block: valid&&!found , invalid_block: !valid,select_block: found};
	}
  setSchedule(day, block) {
    console.log("elegir el bloque " + block + " del dia ", day);

    if(this.find(day,block,this.validSchedule)== -1){
      console.log("Invalid");
      return;
    }

    var index = this.find(day,block,this.schedule);
    var found = index!= -1;
    if (found) {
      console.log("found");
      this.schedule.splice(index, 1);
    } else {
      console.log("not found");
      this.schedule.push([day, block]);
    }

    console.log(this.schedule);
  }

}

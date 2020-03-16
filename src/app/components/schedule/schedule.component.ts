import { Component,OnInit, OnChanges,Input,Output, EventEmitter,SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnChanges,OnInit {
@Output() messageEvent = new EventEmitter<any>();
@Input() days : string[];
@Input() blocks: string[];
@Input() validSchedule: any;
@Input() schedule:any;
selectedSchedule:any;

//@Output outEvent = new EventEmitter<any>();
  constructor(private toastr: ToastrService) { }
  ngOnChanges(changes:SimpleChanges){
    for(let change in changes){
      if(change == "schedule"){
        //console.log(changes[change].currentValue);
        this.selectedSchedule = changes[change].currentValue;
        this.schedule = this.selectedSchedule.map(x => x);
      }else if( change == "validSchedule"){
        this.validSchedule =  changes[change].currentValue;
      }
    }
  }
  ngOnInit() {

    if(this.days == null){
      this.days = this.getDays();
    }
    if(this.blocks==null){
      this.blocks = this.getBLocks();
    }
    if(this.validSchedule==null){
      this.validSchedule = this.getValidSchedule();
    }

  }
  getValidSchedule(){
    var schedule = [];
    for(let day of this.days){
      for(let block of this.blocks){
        if(block != "1-2"){
          schedule.push({"day":day, "hours": block});
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
  selectetSchedule(){
    return this.selectedSchedule;
  }
  isChange(){
    if(this.schedule.length != this.selectedSchedule.length){
      return true;
    }
    //console.log("input: "+this.schedule);
    //console.log("Output: "+this.selectedSchedule);
    for(let s of this.schedule){
      if(this.find(s.day,s.hours,this.selectedSchedule)== -1){
        return true;
      }
    }
    return false;
  }
  sendSchedule(){
    //this.outEvent.emit(this.schedule);
  }

  save(){
     //console.log("selected: "+this.selectedSchedule.length);
    if(this.selectedSchedule.length==0){
      this.toastr.warning("Eliga por lo menos un horario", "Horario App");
    }else if(!this.isChange()){
      this.toastr.warning("No se ha cambiado el horario", "Horario App");
    }else{
      this.toastr.warning("cambiando  horario", "Horario App");
      this.messageEvent.emit(this.selectedSchedule)
    }
  }
  find(day, block,schedule){
    if(schedule == null){
      return 0;
    }
    var index = 0;
    for (var s in schedule) {
      //console.log(day + "==" + this.schedule[s][0] + " and " + this.schedule[s][1] + " == " + block);
      if (schedule[s].day == day && schedule[s].hours == block) {
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
		    found = this.find(day,block,this.selectedSchedule)!=-1;
    }
		return {  valid_block: valid&&!found , invalid_block: !valid,select_block: found};
	}
  setSchedule(day, block) {
    console.log("elegir el bloque " + block + " del dia ", day);

    if(this.find(day,block,this.validSchedule)== -1){
      console.log("Invalid");
      this.toastr.warning("No disponible", "Horario App");
      return;
    }

    var index = this.find(day,block,this.selectedSchedule);
    if (index!= -1) {
      //console.log("found");
      this.selectedSchedule.splice(index, 1);
    } else {
      //console.log("not found");
      this.selectedSchedule.push({"day":day, "hours":block});
    }

    //console.log(this.selectedSchedule);
  }

}

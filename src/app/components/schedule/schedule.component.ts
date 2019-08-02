import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule: any = [];
  @Input() days: any = [];
  @Input() blocks: any = [];

//@Output outEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.loadSchedule();
  }
  sendSchedule(){
    //this.outEvent.emit(this.schedule);
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

}

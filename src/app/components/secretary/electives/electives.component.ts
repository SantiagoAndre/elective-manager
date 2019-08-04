
import { ToastrService } from 'ngx-toastr';
import { HostListener } from "@angular/core"
import { ElectiveService } from './../../../services/secretary/elective.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddElectiveComponent } from './add-elective/add-elective.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Elective } from './../../../services/secretary/elective.model';

@Component({
  selector: 'app-electives',
  templateUrl: './electives.component.html',
  styleUrls: ['./electives.component.css']
})

export class ElectivesComponent implements OnInit {
  electiveList= new Array();
  screenHeight:number;
  screenWidth:number;
  constructor(private service: ElectiveService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog) {

    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
  }

  ngOnInit() {
    this.refreshList();

  }
  loadElectives(electives){
    this.electiveList = new Array();
    for(let elective in electives){
      this.electiveList.push(electives[elective]);
    }
    //console.log(electives);
  }

  refreshList() {
    this.service.getElectiveList().then(res => this.loadElectives(res));


  }

  onElectiveDelete(id: number) {
    if (confirm('Quieres eliminar la electiva?')) {
      this.service.deleteElective(id).then(res => {
        this.refreshList();
        this.toastr.warning("ELectiva eliminada", "App Electivas..");
      });
    }
  }
  setNeedLab(elective){
    elective.needLab = !elective.needLab;
    this.service.updateElective(elective);
    this.toastr.warning(elective+"Electiva actualizada", "App Electivas..");
  }
  AddOrEditElective(elective) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
      dialogConfig.disableClose = false;
      dialogConfig.width = this.widthSubComponent();
    dialogConfig.data = {elective};
    this.dialog.open(AddElectiveComponent, dialogConfig).afterClosed().subscribe(res => {
      this.refreshList();
    });
  }
  widthSubComponent(){
    //hasta 500 se toma el 100%
    // desde 800 se toma el 50%
    let width = 0;
    console.log("screenWidth: "+this.screenWidth);
    if(this.screenWidth<=600 )
      width = 120;
    else if(this.screenWidth>=1000 )
        width = 50;
    else
        width = 70+ (this.screenWidth-600)/400;
    console.log("width sub screen: "+width);
    return width + "%";
  }

  showProfessor(professor){
    if(professor == null){
      return "";
    }
    return professor.name+" "+ professor.last_name;

  }

}

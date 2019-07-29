
import { ToastrService } from 'ngx-toastr';
import { HostListener } from "@angular/core"
import { ProfessorService } from './../../../services/secretary/professor.service';
import { ElectiveService } from './../../../services/secretary/elective.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddElectiveComponent } from './add-elective/add-elective.component';
import { Professor } from './../../../services/secretary/professor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Elective } from './../../../services/secretary/elective.model';

@Component({
  selector: 'app-electives',
  templateUrl: './electives.component.html',
  styleUrls: ['./electives.component.css']
})

export class ElectivesComponent implements OnInit {
  electiveList:any;

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

  refreshList() {
    this.service.getElectiveList().then(res => {this.electiveList = res;this.imprimirElectivas(res);});


  }

imprimirElectivas(electivas){
  for(let electiva of electivas){
    console.log(electiva.teacher);
    console.log(electiva.idElective);
    console.log(electiva._id);
  }
}

  onElectiveDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteElective(id).then(res => {
        this.refreshList();
        this.toastr.warning("Deleted Successfully", "Management Electives App.");
      });
    }
  }
  setNeedLab(elective){
    elective.needLab = !elective.needLab;
    this.service.updateElective(elective);
    this.toastr.warning(elective+"Update Successfully", "Management Electives App.").subscribe;
  }
  AddOrEditElective(elective) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = this.widthSubComponent();
    dialogConfig.data = {elective};
    this.dialog.open(AddElectiveComponent, dialogConfig).afterClosed().subscribe(res => {
      this.refreshList();
    });
  }
  widthSubComponent(){
    //hasta 500 se toma el 100%
    // desde 1000 se toma el 50%
    let width = 0;
    console.log("screenWidth: "+this.screenWidth);
    if(this.screenWidth<=500 )
      width = 100;
    else if(this.screenWidth>=1000 )
        width = 50;
    else
        width = 50+ (this.screenWidth-500)/500;
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

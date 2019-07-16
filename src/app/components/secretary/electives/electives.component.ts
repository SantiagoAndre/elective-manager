
import { ToastrService } from 'ngx-toastr';

import { ProfessorService } from './../../../services/secretary/professor.service';
import { ElectiveService } from './../../../services/secretary/elective.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ElectiveItemsComponent } from './elective-items/elective-items.component';
import { Professor } from './../../../services/secretary/professor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Elective } from './../../../services/secretary/elective.model';

@Component({
  selector: 'app-electives',
  templateUrl: './electives.component.html',
  styles: []
})
export class ElectivesComponent implements OnInit {
  electiveList;

  constructor(private service: ElectiveService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.service.getElectiveList().then(res => this.electiveList = res);
    this.electiveList = [new Elective(213123,'sinformatica','02',true)];
  }



  onElectiveDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteElective(id).then(res => {
        this.refreshList();
        this.toastr.warning("Deleted Successfully", "Management Electives App.");
      });
    }
  }
  AddOrEditElectiveItem(elective) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {elective};
    this.dialog.open(ElectiveItemsComponent, dialogConfig).afterClosed();
  }

  checked(value){
    if(value){
      return "checked";
    }
    return "unchecked";
  }
}

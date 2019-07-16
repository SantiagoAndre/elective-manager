import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { NgForm } from '@angular/forms';
import { ElectiveService } from 'src/app/services/secretary/elective.service';
import { Professor } from './../../../../services/secretary/professor.model';
import { Elective } from './../../../../services/secretary/elective.model';
import { ProfessorService } from './../../../../services/secretary/professor.service';

@Component({
  selector: 'app-add-elective',
  templateUrl: './add-elective.component.html',
  styles: []
})
export class AddElectiveComponent implements OnInit {
  elective:Elective;
  isValid: boolean = true;
  professorList:any=[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddElectiveComponent>,

    private electiveSevice: ElectiveService,
    private professorService: ProfessorService) { }

  ngOnInit() {

    if (this.data.elective == null)
      this.elective = new Elective();
    else
      this.elective =this.data.elective;
    this.loadProfessors();
  }

  loadProfessors() {
    this.professorService.getProfessorList().then(res => this.professorList = res);
  }


  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      if (this.data.elective == null){
        this.electiveSevice.addElective(this.elective);
      }else{
        this.electiveSevice.updateElective(this.elective);
      }
      this.dialogRef.close();
    }
  }

  validateForm() {
    this.isValid = true;
    if (this.elective.name == '')
      this.isValid = false;
    else if (this.elective.teacherId == '')
      this.isValid = false;
    return this.isValid;
  }
  textActionForm(){
    if(this.data.elective == null){
      return "Create";
    }else{
      return "Update";
    }
  }

}

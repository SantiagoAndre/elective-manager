import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';
import { NgForm } from '@angular/forms';
import { ElectiveService } from 'src/app/shared/elective.service';
import { Professor } from './../../../../shared/professor.model';
import { Elective } from './../../../../shared/elective.model';
import { ProfessorService } from './../../../../shared/professor.service';

@Component({
  selector: 'app-elective-items',
  templateUrl: './elective-items.component.html',
  styles: []
})
export class ElectiveItemsComponent implements OnInit {
  elective:Elective;
  itemList: Item[];
  isValid: boolean = true;
  professorList:any=[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ElectiveItemsComponent>,
    private itemService: ItemService,
    private electiveSevice: ElectiveService,
    private professorService: ProfessorService) { }

  ngOnInit() {

    this.itemService.getItemList().then(res => this.itemList = res as Item[]);
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
        alert("add elective ts");
        this.electiveSevice.addElective(this.elective);
      }else{
       alert("update elective ts");
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

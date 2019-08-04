
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { NgForm } from '@angular/forms';
import { ElectiveService } from 'src/app/services/secretary/elective.service';
import { Elective } from './../../../../services/secretary/elective.model';

@Component({
  selector: 'app-add-elective',
  templateUrl: './add-elective.component.html',
  styleUrls: ['./add-elective.component.css']
})
export class AddElectiveComponent implements OnInit {
  elective:Elective;
  isValid: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddElectiveComponent>,
    private toastr: ToastrService,
    private electiveSevice: ElectiveService) { }

  ngOnInit() {

    if (this.data.elective == null)
      this.elective = new Elective();
    else
      this.elective =this.data.elective;
  }



  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      if (this.data.elective == null){
              this.toastr.warning("Electiva añadida", "App Electivas..");
        this.electiveSevice.addElective(this.elective);


      }else{
        this.toastr.warning("Electiva actualizada", "App Electivas..");
        this.electiveSevice.updateElective(this.elective);

      }

    }

    this.dialogRef.close();
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
      return "Crear";
    }else{
      return "Actualizar";
    }
  }
  getIconClass() {
    var update= (this.data.elective == null);
		return { 'fa-plus': update, 'fa-pencil': !update };
	}


}

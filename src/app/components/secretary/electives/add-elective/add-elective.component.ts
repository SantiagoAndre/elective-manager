
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
  invalid_id:boolean = false;
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
        console.log("add elective");
        this.electiveSevice.addElective(this.elective).subscribe(
          res => {
              this.toastr.warning("Electiva añadida", "App Electivas..");
              this.dialogRef.close();
            },
          err => {
            this.toastr.warning("Ya existe una electiva con ese codigo", "App Electivas..");
            this.invalid_id = true;
          }
        );


      }else{
        console.log("update elective");
        this.electiveSevice.updateElective(this.elective).subscribe(
          res => {
            this.toastr.warning("Electiva actualizada", "App Electivas..");
            this.dialogRef.close();
            },
          err => {
            this.toastr.warning("Ya existe una electiva con ese codigo", "App Electivas..");
            this.invalid_id = true;
          }
        );

      }

    }else{
      this.toastr.warning("Llena los campos obligatorios", "App Electivas..");

    }

  }

  validateForm() {
    var isValid = !!this.elective.name &&
                   !!this.elective.idElective;
    return isValid;
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
  setNeedLab(){
    this.elective.needLab = !this.elective.needLab;
  }


}

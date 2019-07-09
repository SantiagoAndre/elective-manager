import { Component, OnInit } from '@angular/core';

import { ElectivaService } from '../../../services/electiva.service';
import { NgForm } from '@angular/forms';
import { Electiva } from '../../../models/electiva';

declare var M: any;

@Component({
  selector: 'app-electiva',
  templateUrl: './electiva.component.html',
  styleUrls: ['./electiva.component.css'],
  providers: [ ElectivaService ]
})
export class ElectivaComponent implements OnInit {

  constructor(private electivaService: ElectivaService) { }

  ngOnInit() {
    this.getElectivas();
  }

  addElectiva(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.electivaService.putElectiva(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getElectivas();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.electivaService.postElectiva(form.value)
      .subscribe(res => {
        this.getElectivas();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }

  }

  getElectivas() {
    this.electivaService.getElectivas()
      .subscribe(res => {
        this.electivaService.electivas = res as Electiva[];
      });
  }

  editElectiva(electiva: Electiva) {
    this.electivaService.selectedElectiva = electiva;
  }

  deleteElectiva(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.electivaService.deleteElectiva(_id)
        .subscribe(res => {
          this.getElectivas();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.electivaService.selectedElectiva = new Electiva();
    }
  }

}

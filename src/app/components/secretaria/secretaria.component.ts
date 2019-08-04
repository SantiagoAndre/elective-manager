import { Component, OnInit } from '@angular/core';
import { SecretaryService } from 'src/app/services/secretary.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  uploadedFile : Array<File>;

  constructor(private secretary: SecretaryService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.secretary.cerrarSesion().subscribe(rest=> (alert(rest)) );
    this.router.navigate(['/signIn']);
  }

  abrirPeriodo(){
    this.secretary.abrirPeriodo().subscribe( rest => (alert(rest)) );
  }

  cerrarPeriodo(){
    this.secretary.cerrarPeriodo().subscribe( rest => (alert(rest)) );
  }

  enviarCorreosProfesores(){
    //this.secretary.enviarCorreos().subscribe( rest => (alert(rest)) );
  }

  enviarCorreosEstudiantes(){
    //this.secretary.enviarCorreos().subscribe( rest => (alert(rest)) );
  }

  listarElectivas(){
    this.router.navigate(['/secretaria/electivas']);
  }

  actualizarArchivo(){
    let formData = new FormData();
    formData.append("uploads[]", this.uploadedFile[0], this.uploadedFile[0].name);
    this.secretary.uploadFile(this.uploadedFile[0]).subscribe( rest => (console.log(rest)) );
  }

  onFileChange(e){
    console.log(e);
    this.uploadedFile = e.target.files;
  }

}

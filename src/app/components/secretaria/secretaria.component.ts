import { Component, OnInit } from '@angular/core';
import { SecretaryService } from 'src/app/services/secretary.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  uploadedFile : Array<File>;

  constructor(private secretary: SecretaryService, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  logout(){
    this.secretary.cerrarSesion().subscribe(rest=> (alert(rest)) );
    this.router.navigate(['/signIn']);
  }

  abrirPeriodo(){
    this.secretary.abrirPeriodo().subscribe(
      rest => (
        this.toastr.warning("Periodo abierto", "Secretaria App")
      ) ,
      err =>(
        this.toastr.warning("No se abrio el periodo", "Secretaria App")
      )
  );
  }

  cerrarPeriodo(){
    this.secretary.cerrarPeriodo();
  }
  simulateStudent(){
    this.router.navigate(['/estudiante/tokenDePrueba']);
  }
  simulateProfesor(){
    this.router.navigate(['/profesor/tokenCaducado']);
  }
  enviarCorreosProfesores(){
    this.secretary.enviarCorreos().subscribe(
      rest => (
        this.toastr.warning("Correos enviados", "Secretaria App")
      ) ,
      err =>(
        this.toastr.warning("Correos enviados", "Secretaria App")
      )
  );
  }

  enviarCorreosEstudiantes(){
    this.toastr.warning("Proximamente implementaremos esta funcionalidad, disculpa las molestias :)", "Secretaria App")
    //this.secretary.enviarCorreos().subscribe( rest => (alert(rest)) );
  }

  listarElectivas(){
    this.router.navigate(['/secretaria/electivas']);
  }

  actualizarArchivo(){
    let formData = new FormData();
    formData.append("uploads[]", this.uploadedFile[0], this.uploadedFile[0].name);
    this.secretary.uploadFile(formData).subscribe(
      rest => (
        this.toastr.warning("Archivo enviado", "Secretaria App")
      ) ,
      err =>(
        this.toastr.warning("Error contacte el administrador", "Secretaria App")
      )
  );
  }

  onFileChange(e){
    console.log(e);
    this.uploadedFile = e.target.files;
  }

}

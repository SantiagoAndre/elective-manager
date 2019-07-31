import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SesionService } from '../services/sesion.service';
import { selector } from 'rxjs-compat/operator/publish';

@Injectable({
  providedIn: 'root'
})
export class SessionupGuard implements CanActivate {

  constructor(private sesion: SesionService, private router: Router){}

  canActivate(){

    if(this.sesion.getCurrentUser()){
      this.router.navigate(['/secretaria']);
      return true;
    }
    return true;

  }
  
}

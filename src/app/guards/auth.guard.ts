import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  
  constructor(private sesion: SesionService, private router: Router){}
  canActivate(){

    if(!this.sesion.getCurrentUser()){
      this.router.navigate(['/signIn']);
      return true;
    }
    return true;

  }





}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { ChooseAvailableScheduleComponent } from './components/profesor/choose-available-schedule/choose-available-schedule.component';

import { ElectivesComponent } from './components/secretary/electives/electives.component';

import { SecretariaComponent } from './components/secretaria/secretaria.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { AuthGuard } from './guards/auth.guard';
import { SessionupGuard } from './guards/sessionup.guard';


const routes: Routes = [
  //{ path: 'iniciarSesion',  component: IniciarSesionComponent},
  {path: 'signIn', component: SignInComponent, canActivate: [SessionupGuard]},
  {path: 'profesor/ChooseAvailableSchedule', component: ChooseAvailableScheduleComponent},
  //{path: 'secretaria/electivas', component: ElectivaComponent},
  {path:'electives',component:ElectivesComponent},
  {path: 'secretaria', component: SecretariaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

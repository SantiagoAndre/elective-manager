import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { ScheduleProfessorComponent } from './components/professor/schedule-professor/schedule-professor.component';
import { ScheduleStudentComponent } from './components/student/schedule-student/schedule-student.component';
import {ScheduleComponent} from './components/schedule/schedule.component'
import { ElectivesComponent } from './components/secretary/electives/electives.component';

import { SecretariaComponent } from './components/secretaria/secretaria.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { AuthGuard } from './guards/auth.guard';
import { SessionupGuard } from './guards/sessionup.guard';


const routes: Routes = [
  //{ path: 'iniciarSesion',  component: IniciarSesionComponent},
  {path: '',  component: SignInComponent, canActivate: [SessionupGuard]},
  {path: 'signIn', component: SignInComponent, canActivate: [SessionupGuard]},
  {path: 'profesor/horario/:token', component: ScheduleProfessorComponent},
  {path: 'estudiante/horario/:token', component: ScheduleStudentComponent},
  //{path: 'secretaria/electivas', component: ElectivaComponent},
  {path:'secretaria/electivas',component:ElectivesComponent},
  {path: 'secretaria', component: SecretariaComponent},
  {path: 'horario', component: ScheduleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

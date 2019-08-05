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
  //{path: '',  redirectTo:'signIn', pathMatch: 'full'},
  {path: 'signIn', component: SignInComponent  },
  {path: 'profesor/:token', component: ScheduleProfessorComponent},
  {path: 'estudiante/:token', component: ScheduleStudentComponent},
  //{path: 'secretaria/electivas', component: ElectivaComponent},
  {path:'secretaria/electivas',component:ElectivesComponent},
  {path: 'secretaria', component: SecretariaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

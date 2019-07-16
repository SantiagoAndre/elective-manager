import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ChooseAvailableScheduleComponent } from './components/profesor/choose-available-schedule/choose-available-schedule.component';
import { SecretariaComponent } from './components/secretaria/secretaria.component';
import { ElectivesComponent } from './electives/electives.component';
const routes: Routes = [
  //{ path: 'iniciarSesion',  component: IniciarSesionComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profesor/ChooseAvailableSchedule', component: ChooseAvailableScheduleComponent},
  //{path: 'secretaria/electivas', component: ElectivaComponent},
  {path: 'secretaria', component: SecretariaComponent},
  {path:'electives',component:ElectivesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ChooseAvailableScheduleComponent } from './components/profesor/choose-available-schedule/choose-available-schedule.component';
const routes: Routes = [
  //{ path: 'iniciarSesion',  component: IniciarSesionComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'profesor/ChooseAvailableSchedule', component: ChooseAvailableScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

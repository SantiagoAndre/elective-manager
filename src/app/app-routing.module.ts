import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { ChooseAvailableScheduleComponent } from './components/profesor/choose-available-schedule/choose-available-schedule.component';

import { ElectivesComponent } from './components/secretary/electives/electives.component';
const routes: Routes = [
  //{ path: 'iniciarSesion',  component: IniciarSesionComponent},

  {path: 'profesor/ChooseAvailableSchedule', component: ChooseAvailableScheduleComponent},
  //{path: 'secretaria/electivas', component: ElectivaComponent},
  {path:'electives',component:ElectivesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

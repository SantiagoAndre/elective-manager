import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SignInComponent } from './components/sign-in/sign-in.component';
//import { ElectivaComponent } from './components/secretaria/electivas/electiva.component';
import { ChooseAvailableScheduleComponent } from './components/profesor/choose-available-schedule/choose-available-schedule.component';
import { LoginComponent } from './components/login/login.component';
import { SecretariaComponent } from './components/secretaria/secretaria.component';

import { ElectivesComponent } from './components/secretary/electives/electives.component';
import { AddElectiveComponent } from './components/secretary/electives/add-elective/add-elective.component';
import { ElectiveService } from './services/secretary/elective.service';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChooseAvailableScheduleComponent,
    LoginComponent,
    //ElectivaComponent,
    SecretariaComponent,
    ElectivesComponent,
    AddElectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatCheckboxModule
  ],
  entryComponents:[AddElectiveComponent],
  providers: [ElectiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

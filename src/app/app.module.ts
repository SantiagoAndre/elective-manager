import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { ElectivaComponent } from './components/secretaria/electivas/electiva.component';
import { ChooseAvailableScheduleComponent } from './components/profesor/choose-available-schedule/choose-available-schedule.component';
import { LoginComponent } from './components/login/login.component';
import { SecretariaComponent } from './components/secretaria/secretaria.component';

import { ElectivesComponent } from './electives/electives.component';
import { ElectiveItemsComponent } from './electives/elective-items/elective-items.component';
import { ElectiveService } from './shared/elective.service';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChooseAvailableScheduleComponent,
    LoginComponent,
    ElectivaComponent,
    SecretariaComponent,
    ElectivesComponent,
    ElectiveItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  entryComponents:[ElectiveItemsComponent],
  providers: [ElectiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

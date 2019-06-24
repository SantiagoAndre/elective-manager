import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { ChooseAvailableScheduleComponent } from './components/profesor/choose-available-schedule/choose-available-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChooseAvailableScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

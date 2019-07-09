import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ElectivaComponent } from './components/secretaria/electivas/electiva.component';
import { ChooseAvailableScheduleComponent } from './components/profesor/choose-available-schedule/choose-available-schedule.component';
import { LoginComponent } from './components/login/login.component';
import { SecretariaComponent } from './components/secretaria/secretaria.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChooseAvailableScheduleComponent,
    LoginComponent,
    ElectivaComponent,
    SecretariaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

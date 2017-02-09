import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@angular/material';
// import { SettingsComponent } from './settings/settings.component';
import { SettingsModule } from './settings/settings.module';
import { HomeModule } from './home/home.module';

import { AppService } from './app.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    SettingsModule,
    HomeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

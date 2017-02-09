import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from '../settings/reuse-strategy';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [{provide: RouteReuseStrategy, useClass: CustomReuseStrategy}]

})
export class HomeModule { }

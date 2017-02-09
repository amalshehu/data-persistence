import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './reuse-strategy';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
  ],
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  providers: [{provide: RouteReuseStrategy, useClass: CustomReuseStrategy}]

})
export class SettingsModule { }

import { LightcontrollerComponent } from './lightcontroller/lightcontroller.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,

  ],
  declarations: [
    DashboardComponent, 
    LightcontrollerComponent,
    ],
  exports: [
    DashboardComponent,
]
  
})

export class DashboardModule { }


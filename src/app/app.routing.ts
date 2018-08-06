import {Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';

const APP_Routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},
{ path: 'service', component: ServiceComponent}

];

export const routing = RouterModule.forRoot(APP_Routes);
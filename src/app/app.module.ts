import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    HomeComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

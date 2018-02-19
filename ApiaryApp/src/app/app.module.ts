import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiProjectsComponent } from './components/apiProjects/apiProjects.component';
import { ApisService } from './services/apiProjects.service';


@NgModule({
  declarations: [
    AppComponent,
    ApiProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }

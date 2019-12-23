import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { AboutComponent } from '../views/about/about.component';
import { HomeComponent } from '../views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

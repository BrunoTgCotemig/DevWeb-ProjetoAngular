import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/OnScreenElements/header/header.component';

// Custum modules --import here --reference on import array
import { MatToolbarModule } from "@angular/material/toolbar";

import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"
import { MatCardModule } from "@angular/material/card"

import { FooterComponent } from './components/OnScreenElements/footer/footer.component';
import { SidewaysNavbarComponent } from './components/OnScreenElements/sideways-navbar/sideways-navbar.component';
import { ViewMainComponent } from './components/PageViews/view-main/view-main.component';
import { ViewAdddataComponent } from './components/PageViews/view-adddata/view-adddata.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidewaysNavbarComponent,
    ViewMainComponent,
    ViewAdddataComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

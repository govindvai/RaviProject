import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MtocComponent } from './mtoc/mtoc.component';
import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MXActionComponent } from './mx-action/mx-action.component';
@NgModule({
  declarations: [
    AppComponent,
    MtocComponent,
    HeaderComponent,
    MXActionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

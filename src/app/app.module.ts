import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwichComponent } from './swich/swich.component';
import { Formulario2Component } from './formulario2/formulario2.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component'; //se agrega de forma manual para formularios

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwichComponent,
    Formulario2Component,
    FormularioReactivoComponent,
    AddMessagesComponent,
    ListMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //se agrega de forma manual para formularios
    ReactiveFormsModule //se agrega formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

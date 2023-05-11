import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { AccordionModule } from 'ngx-bootstrap/accordion';
//import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormularioComponent } from './formulario/formulario.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'principal', component: AppComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'formulario', component: FormularioComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    UsuarioComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //MatIconModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    AccordionModule.forRoot(),

    // MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

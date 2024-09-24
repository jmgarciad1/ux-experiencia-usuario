import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { SesionModule } from './sesion/sesion.module';
import { SettingsSesionComponent } from './settings-sesion/settings-sesion.component';

import { UsuarioModule } from './usuario/usuario.module';
import { SettingsUsuarioComponent } from './settings-usuario/settings-usuario.component';

import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { SettingsAutenticacionComponent } from './settings-autenticacion/settings-autenticacion.component';

import { RingtoneModule } from './ringtone/ringtone.module';
import { SettingsRingtoneComponent } from './settings-ringtone/settings-ringtone.component';

import { FondoModule } from './fondo/fondo.module';
import { SettingsFondoComponent } from './settings-fondo/settings-fondo.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsSesionComponent,
	SettingsUsuarioComponent,
	SettingsAutenticacionComponent,
	SettingsRingtoneComponent,
    SettingsFondoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SesionModule,
	UsuarioModule,
	AutenticacionModule,
	RingtoneModule,
    FondoModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsSesionComponent } from './settings-sesion/settings-sesion.component';
import { SettingsUsuarioComponent } from './settings-usuario/settings-usuario.component';
import { SettingsAutenticacionComponent } from './settings-autenticacion/settings-autenticacion.component';
import { RingtoneListComponent } from './ringtone/ringtone-list/ringtone-list.component';
import { SettingsRingtoneComponent } from './settings-ringtone/settings-ringtone.component';
import { FondoListComponent } from './fondo/fondo-list/fondo-list.component';
import { SettingsFondoComponent } from './settings-fondo/settings-fondo.component';

const routes: Routes = [
  { path: '', redirectTo: 'settings/sesiones/create', pathMatch: 'full' },
  { path: 'settings/sesiones/:option', component: SettingsSesionComponent },
  { path: 'settings/usuarios/:option', component: SettingsUsuarioComponent },
  { path: 'settings/autenticaciones/:option', component: SettingsAutenticacionComponent },
  { path: 'ringtones', component: RingtoneListComponent },
  { path: 'settings/ringtones/:option', component: SettingsRingtoneComponent },
  { path: 'fondos', component: FondoListComponent },
  { path: 'settings/fondos/:option', component: SettingsFondoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FondoListComponent } from './fondo-list/fondo-list.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export function playerFactory() {
  return player;
}
@NgModule({
  imports: [CommonModule, LottieModule.forRoot({ player: playerFactory })],
  exports: [FondoListComponent],
  declarations: [FondoListComponent],
})
export class FondoModule {}

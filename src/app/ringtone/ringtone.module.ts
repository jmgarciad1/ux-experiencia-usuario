import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RingtoneListComponent } from './ringtone-list/ringtone-list.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export function playerFactory() {
  return player;
}
@NgModule({
  imports: [CommonModule, LottieModule.forRoot({ player: playerFactory })],
  exports: [RingtoneListComponent],
  declarations: [RingtoneListComponent],
})
export class RingtoneModule {}

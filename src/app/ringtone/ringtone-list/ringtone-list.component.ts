import { Component, OnInit } from '@angular/core';
import { RingtoneService } from '../ringtone.service';
import { Ringtone } from '../ringtone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ringtone-list',
  templateUrl: './ringtone-list.component.html',
  styleUrls: ['./ringtone-list.component.css'],
})
export class RingtoneListComponent implements OnInit {
  ringtones: Array<Ringtone> = [];

  constructor(
              private router: Router, 
              private ringtoneService: RingtoneService
            ) {}

  linkMenuTop(path: any) {
    this.router.navigate([path]);
  }

  getRingtones(): void {
    this.ringtoneService.getRingtones().subscribe((ringtones) => {
      this.ringtones = ringtones;
    });
  }

  ngOnInit() {
    this.getRingtones();
  }
}

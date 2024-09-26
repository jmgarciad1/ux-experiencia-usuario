import { Component, OnInit } from '@angular/core';
import { FondoService } from '../fondo.service';
import { Fondo } from '../fondo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fondo-list',
  templateUrl: './fondo-list.component.html',
  styleUrls: ['./fondo-list.component.css'],
})
export class FondoListComponent implements OnInit {
  fondos: Array<Fondo> = [];

  constructor(
              private router: Router, 
              private fondoService: FondoService
            ) {}

  linkMenuTop(path: any) {
    this.router.navigate([path]);
  }

  getFondos(): void {
    this.fondoService.getFondos().subscribe((fondos) => {
      this.fondos = fondos;
    });
  }

  ngOnInit() {
    this.getFondos();
  }
}

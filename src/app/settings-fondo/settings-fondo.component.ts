import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { FondoService } from '../fondo/fondo.service';
import { Fondo } from '../fondo/fondo';

@Component({
  selector: 'app-settings-fondo',
  templateUrl: './settings-fondo.component.html',
  styleUrls: ['./settings-fondo.component.css'],
})
export class SettingsFondoComponent implements OnInit {
  createFondoForm!: FormGroup;

  option: string = '';

  fondos: Fondo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilderCreateFondoForm: FormBuilder,
    private toastr: ToastrService,
    private fondoService: FondoService
  ) {}

  linkMenuTop(path: any) {
    this.router.navigate([path]);
  }

  createFondo(fondo: any) {
    /*const formatFondoBody = {
      name: fondo.name,
      description: fondo.description,
      filefondo: fondo.filefondo,
      status: fondo.status,
    };

    this.fondoService.createFondo(formatFondoBody).subscribe((fondo) => {
      this.toastr.success('Confirmation', 'Fondo creado');
      this.createFondoForm.reset();
    });*/
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.option = params['option'];
      if (this.option !== 'create') {
        this.router.navigate(['/fondos']);
      }
    });

    this.createFondoForm = this.formBuilderCreateFondoForm.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      filefondo: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }
}

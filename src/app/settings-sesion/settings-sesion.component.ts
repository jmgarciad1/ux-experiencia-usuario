import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SesionService } from '../sesion/sesion.service';
import { Sesion } from '../sesion/sesion';

@Component({
  selector: 'app-settings-sesion',
  templateUrl: './settings-sesion.component.html',
  styleUrls: ['./settings-sesion.component.css'],
})
export class SettingsSesionComponent implements OnInit {
  createSesionForm!: FormGroup;

  option: string = '';

  sesiones: Sesion[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilderCreateSesionForm: FormBuilder,
    private toastr: ToastrService,
    private sesionService: SesionService
  ) {}

  linkMenuTop(path: any) {
    this.router.navigate([path]);
  }

  createSesion(sesion: any) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.option = params['option'];
      if (this.option !== 'create') {
        this.router.navigate(['/settings/sesiones/create']);
      }
    });

    this.createSesionForm = this.formBuilderCreateSesionForm.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      contrasena: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}

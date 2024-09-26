import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AutenticacionService } from '../autenticacion/autenticacion.service';
import { Autenticacion } from '../autenticacion/autenticacion';

@Component({
  selector: 'app-settings-autenticacion',
  templateUrl: './settings-autenticacion.component.html',
  styleUrls: ['./settings-autenticacion.component.css'],
})
export class SettingsAutenticacionComponent implements OnInit {
  createAutenticacionForm!: FormGroup;

  option: string = '';

  autenticaciones: Autenticacion[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilderCreateAutenticacionForm: FormBuilder,
    private toastr: ToastrService,
    private autenticacionService: AutenticacionService
  ) {}

  linkMenuTop(path: any) {
    this.router.navigate([path]);
  }

  createAutenticacion(autenticacion: any) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.option = params['option'];
      if (this.option !== 'create') {
        this.router.navigate(['/settings/sesiones/create']);
      }
    });

    this.createAutenticacionForm = this.formBuilderCreateAutenticacionForm.group({
      code: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}

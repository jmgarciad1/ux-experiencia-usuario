import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-settings-usuario',
  templateUrl: './settings-usuario.component.html',
  styleUrls: ['./settings-usuario.component.css'],
})
export class SettingsUsuarioComponent implements OnInit {
  createUsuarioForm!: FormGroup;

  option: string = '';

  usuarios: Usuario[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilderCreateUsuarioForm: FormBuilder,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) {}

  linkMenuTop(path: any) {
    this.router.navigate([path]);
  }

  createUsuario(usuario: any) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.option = params['option'];
      if (this.option !== 'create') {
        this.router.navigate(['/settings/sesiones/create']);
      }
    });

    this.createUsuarioForm = this.formBuilderCreateUsuarioForm.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      user: ['', [Validators.required, Validators.minLength(3)]],
      contrasena: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}

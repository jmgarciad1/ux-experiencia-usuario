import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { RingtoneService } from '../ringtone/ringtone.service';
import { Ringtone } from '../ringtone/ringtone';

@Component({
  selector: 'app-settings-ringtone',
  templateUrl: './settings-ringtone.component.html',
  styleUrls: ['./settings-ringtone.component.css'],
})
export class SettingsRingtoneComponent implements OnInit {
  createRingtoneForm!: FormGroup;

  option: string = '';

  ringtones: Ringtone[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilderCreateRingtoneForm: FormBuilder,
    private toastr: ToastrService,
    private ringtoneService: RingtoneService
  ) {}

  linkMenuTop(path: any) {
    this.router.navigate([path]);
  }

  createRingtone(ringtone: any) {
    /*const formatRingtoneBody = {
      name: ringtone.name,
      description: ringtone.description,
      fileringtone: ringtone.fileringtone,
      status: ringtone.status,
    };

    this.ringtoneService.createRingtone(formatRingtoneBody).subscribe((ringtone) => {
      this.toastr.success('Confirmation', 'Ringtone creado');
      this.createRingtoneForm.reset();
    });*/
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.option = params['option'];
      if (this.option !== 'create') {
        this.router.navigate(['/ringtones']);
      }
    });

    this.createRingtoneForm = this.formBuilderCreateRingtoneForm.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      fileringtone: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }
}

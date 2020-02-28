import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.inicializarForm();
    console.log(this.form);
  }

  baixarOs() {
    window.alert('bruxão');
  }

  inicializarForm() {
    this.form = new FormGroup({
      cpf: new FormControl(''),
      contrato: new FormControl(''),
      oss: new FormControl(''),
      caId: new FormControl('', Validators.required),
      smartCard: new FormControl('', Validators.required),
      cidade: new FormControl('')
    });
  }

}

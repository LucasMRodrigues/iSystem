import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { OsModel } from '../core/model/os.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.inicializarForm();
    console.log(this.form);
  }

  baixarOs(e) {
    e.preventDefault();
    this.homeService.baixarOS(this.form.value)
    .subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
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

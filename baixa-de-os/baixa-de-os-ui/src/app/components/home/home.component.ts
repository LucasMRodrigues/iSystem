import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { OsModel } from '../core/model/os.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  baixandoOs = false;

  constructor(
    private homeService: HomeService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.inicializarForm();
    console.log(this.form);
  }

  baixarOs(e) {
    e.preventDefault();
    this.baixandoOs = true;
    this.homeService
      .obterEndpointBackendDoArquivoDeConfiguracao()
      .subscribe((res) => {
        console.log(res);
        this.homeService.baixarOS(this.form.value, res)
          .subscribe(
            (r) => {
              console.log(r);
              this.baixandoOs = false;
              this.toastr.success('Baixa da Ordem de Serviço finalizada!', 'Sucesso!');
              this.inicializarForm();
            },
            (err) => {
              console.log(err);
              this.baixandoOs = false;
              this.toastr.error('Não foi possível realizar a baixa.', 'Erro...');
            });
      }, (err) => {
        console.log(err);
        this.baixandoOs = false;
        this.toastr.error('Não foi possível estabelecer conexão com o servidor.', 'Erro...');
      })
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

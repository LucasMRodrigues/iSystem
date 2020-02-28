import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'http://localhost:8080/baixa-os-service';

  constructor(
    private http: HttpClient
  ) { }

  baixarOS(model) {
    const params = new HttpParams();

    params.set('cpf', model.cpf || null);
    params.set('cpf', model.contrato || null);
    params.set('cpf', model.oss || null);
    params.set('cpf', model.caId);
    params.set('cpf', model.smartCard);
    params.set('cpf', model.cidade || null);

    this.http.post(this.url, null, { params });
  }
}

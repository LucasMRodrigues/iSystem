import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { OsModel } from '../core/model/os.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  baixarOS(os, url) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url.concat('/os/baixar'), os, { headers });
  }

  obterEndpointBackendDoArquivoDeConfiguracao() {

    const caminhoDoArquivo = 'http://192.168.15.9:8887/config.properties.txt';

    return this.http.get(caminhoDoArquivo, { responseType: 'text' as 'json'});
  }
}

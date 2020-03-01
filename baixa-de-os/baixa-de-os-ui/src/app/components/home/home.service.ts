import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { OsModel } from '../core/model/os.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'http://localhost:8080/baixa-os-service';

  constructor(
    private http: HttpClient
  ) { }

  baixarOS(os) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.http.post(this.url.concat('/os/baixar'), os, { headers });
  }
}

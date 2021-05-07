import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Avaliacao } from '../model/Avaliacao';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAvaliacaoService {

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  getAllAvaliacao(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(
      'http://localhost:8080/api/v1/recycleMe/avaliacao',
      this.token
    );
  }

  getAvaliacaoId(): Observable<Avaliacao> {
    return this.http.get<Avaliacao>(
      'http://localhost:8080/api/v1/recycleMe/avaliacao/{id}',
      this.token
    );
  }

  
  getAvaliacao(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(
      'http://localhost:8080/api/v1/recycleMe/avaliacao/{avaliacao}',
      this.token
    );
  }

  // Retorna uma lista de avaliações maiores que 4
  getAvaliacaoMaior(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(
      'http://localhost:8080/api/v1/recycleMe/avaliacao/classificacao',
      this.token
    );
  }

  postAvaliacao(avaliacao: Avaliacao): Observable<Avaliacao> {
    return this.http.post<Avaliacao>(
      'http://localhost:8080/api/v1/recycleMe/usuario/avaliacao/nova/{id_usuario}',
      avaliacao,
      this.token
    );
  }
}

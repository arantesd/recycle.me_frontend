import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  getAllUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:8080/api/v1/recycleMe/usuario')
  }
}

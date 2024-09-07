import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Estado } from "../model/estado";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private apiUrl = `${API_CONFIG.baseUrl}/estados`; // Usa a URL da configuração

  constructor(private http: HttpClient) { }

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${API_CONFIG.baseUrl}/estados`,);
}
}

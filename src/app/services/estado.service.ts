import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Estado } from "../model/estado";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${API_CONFIG.baseUrl}/estados`,);
}
}

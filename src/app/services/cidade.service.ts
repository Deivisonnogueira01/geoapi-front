import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cidade } from "../model/cidade";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  getCidades(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(`${API_CONFIG.baseUrl}/cidades`,);

  }
}

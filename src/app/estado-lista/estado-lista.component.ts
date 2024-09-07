import { Component, OnInit } from '@angular/core';
import { Estado } from '../model/estado';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-estado-lista',
  templateUrl: './estado-lista.component.html',
  styleUrls: ['./estado-lista.component.css']
})
export class EstadoListaComponent implements OnInit {

  estados: Estado[] = [];
  token: string = '';

  constructor(private estadoService: EstadoService) { }

  ngOnInit(): void {
    //this.carregarEstados();
  }

  carregarEstados(): void {
    this.estadoService.getEstados().subscribe({
      next: (data: Estado[]) => this.estados = data,
      error: (err) => console.error('Erro ao carregar estados', err)
    });
  }
}

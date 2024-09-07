import { Component, OnInit } from '@angular/core';
import { Cidade } from '../model/cidade';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

   cidades: Cidade[] = [];


  constructor( private cidadeService: CidadeService) { }

  ngOnInit(): void {
  }


  carregarCidades() : void {
   this.cidadeService.getCidades().subscribe({
    next: (data: Cidade[]) => this.cidades = data,
    error: (err) => console.error('Erro ao carregar cidades', err)
   });
  }
}

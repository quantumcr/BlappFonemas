import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS, CategoriaI } from '../../../data/categorias/data.categorias';
@Component({
  selector: 'app-juego-semanticas',
  templateUrl: './juego-semanticas.page.html',
  styleUrls: ['./juego-semanticas.page.scss'],
})
export class JuegoSemanticasPage implements OnInit {
  public categoria: CategoriaI;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoria = JSON.parse(params['category']);
    });
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoSemanticasPage } from './juego-semanticas.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoSemanticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoSemanticasPageRoutingModule {}

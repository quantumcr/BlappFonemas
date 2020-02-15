import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemanticasPage } from './semanticas.page';

const routes: Routes = [
  {
    path: '',
    component: SemanticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemanticasPageRoutingModule {}

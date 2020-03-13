import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsonantesPage } from './consonantes.page';

const routes: Routes = [
  {
    path: '',
    component: ConsonantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsonantesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoFonemasPage } from './juego-fonemas.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoFonemasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoFonemasPageRoutingModule {}

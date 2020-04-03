import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FonemaPage } from './fonema.page';

const routes: Routes = [
  {
    path: '',
    component: FonemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FonemaPageRoutingModule {}

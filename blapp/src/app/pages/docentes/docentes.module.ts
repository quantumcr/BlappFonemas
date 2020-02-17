import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentesPageRoutingModule } from './docentes-routing.module';

import { DocentesPage } from './docentes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DocentesPage]
})
export class DocentesPageModule {}

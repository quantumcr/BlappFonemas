import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsonantesPageRoutingModule } from './consonantes-routing.module';

import { ConsonantesPage } from './consonantes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsonantesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConsonantesPage]
})
export class ConsonantesPageModule {}

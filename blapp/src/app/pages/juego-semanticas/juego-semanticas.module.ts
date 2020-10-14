import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegoSemanticasPageRoutingModule } from './juego-semanticas-routing.module';

import { JuegoSemanticasPage } from './juego-semanticas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    JuegoSemanticasPageRoutingModule
  ],
  declarations: [JuegoSemanticasPage]
})
export class JuegoSemanticasPageModule {}

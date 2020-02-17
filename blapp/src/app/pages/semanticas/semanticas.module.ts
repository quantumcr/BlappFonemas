import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemanticasPageRoutingModule } from './semanticas-routing.module';

import { SemanticasPage } from './semanticas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemanticasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SemanticasPage]
})
export class SemanticasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegoFonemasPageRoutingModule } from './juego-fonemas-routing.module';

import { JuegoFonemasPage } from './juego-fonemas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    JuegoFonemasPageRoutingModule
  ],
  declarations: [JuegoFonemasPage]
})
export class JuegoFonemasPageModule {}

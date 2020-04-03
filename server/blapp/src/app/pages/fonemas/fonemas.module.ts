import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FonemasPageRoutingModule } from './fonemas-routing.module';

import { FonemasPage } from './fonemas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FonemasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FonemasPage]
})
export class FonemasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FonemaPageRoutingModule } from './fonema-routing.module';

import { FonemaPage } from './fonema.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FonemaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FonemaPage]
})
export class FonemaPageModule {}

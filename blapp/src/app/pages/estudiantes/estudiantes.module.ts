import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiantesPageRoutingModule } from './estudiantes-routing.module';

import { EstudiantesPage } from './estudiantes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EstudiantesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EstudiantesPage]
})
export class EstudiantesPageModule {}

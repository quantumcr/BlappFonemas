import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { ProfessorMenuComponent } from './menu-panel/professor-menu/professor-menu.component';
import { StudentsMenuComponent } from './menu-panel/students-menu/students-menu.component';
import { PhonemeComponent } from './phoneme/phoneme.component';
import { PhonemeBarComponent } from './phoneme/phoneme-bar/phoneme-bar.component';
import { VocalPanelComponent } from './phoneme/vocal-panel/vocal-panel.component';
import { ConsonantPanelComponent } from './phoneme/consonant-panel/consonant-panel.component';
import { PhonemeGamePanelComponent } from './phoneme/phoneme-game-panel/phoneme-game-panel.component';
import { SemanticsComponent } from './semantics/semantics.component';
import { SemanticsBarComponent } from './semantics/semantics-bar/semantics-bar.component';
import { CategoriesPanelComponent } from './semantics/categories-panel/categories-panel.component';
import { SemanticsGamePanelComponent } from './semantics/semantics-game-panel/semantics-game-panel.component';




@NgModule({
  declarations: [LoginComponent,
    MenuPanelComponent, ProfessorMenuComponent, StudentsMenuComponent,
    PhonemeComponent, PhonemeBarComponent, VocalPanelComponent, ConsonantPanelComponent, PhonemeGamePanelComponent,
    SemanticsComponent, SemanticsBarComponent, CategoriesPanelComponent, SemanticsGamePanelComponent],
  exports: [LoginComponent,
    MenuPanelComponent, ProfessorMenuComponent, StudentsMenuComponent,
    PhonemeComponent, PhonemeBarComponent, VocalPanelComponent, ConsonantPanelComponent, PhonemeGamePanelComponent,
    SemanticsComponent, SemanticsBarComponent, CategoriesPanelComponent, SemanticsGamePanelComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }

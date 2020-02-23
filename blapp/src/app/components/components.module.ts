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
import { ProfessorComponent } from './professor/professor.component';
import { ListComponent } from './professor/list/list.component';
import { RegisterComponent } from './professor/register/register.component';
import { StudentInfoComponent } from './professor/student-info/student-info.component';
import { StudentsBarComponent } from './professor/students-bar/students-bar.component';
import { FunctionBarComponent } from './professor/student-info/function-bar/function-bar.component';
import { InfoPanelComponent } from './professor/student-info/info-panel/info-panel.component';
import { PersonalInfoComponent } from './professor/student-info/info-panel/personal-info/personal-info.component';
import { FamilyInfoComponent } from './professor/student-info/info-panel/family-info/family-info.component';
import { FoodInfoComponent } from './professor/student-info/info-panel/food-info/food-info.component';
import { PhonemeViewComponent } from './phoneme-view/phoneme-view.component';
import { BarComponent } from './phoneme-view/bar/bar.component';
import { PhonemePanelComponent } from './phoneme-view/phoneme-panel/phoneme-panel.component';
import { VideoPanelComponent } from './phoneme-view/video-panel/video-panel.component';
import { SubcategoriesComponent } from './semantics/subcategories/subcategories.component';
import { SubcategoriesBarComponent } from './semantics/subcategories/subcategories-bar/subcategories-bar.component';
import { SubcategoriesPanelComponent } from './semantics/subcategories/subcategories-panel/subcategories-panel.component';



@NgModule({
  declarations: [LoginComponent,
    MenuPanelComponent, ProfessorMenuComponent, StudentsMenuComponent,
    PhonemeComponent, PhonemeBarComponent, VocalPanelComponent, ConsonantPanelComponent, PhonemeGamePanelComponent,
    PhonemeViewComponent, BarComponent, PhonemePanelComponent, VideoPanelComponent,
    SemanticsComponent, SemanticsBarComponent, CategoriesPanelComponent, SemanticsGamePanelComponent,
    SubcategoriesComponent, SubcategoriesBarComponent, SubcategoriesPanelComponent,
    ProfessorComponent, ListComponent, RegisterComponent, StudentInfoComponent,
    FunctionBarComponent, InfoPanelComponent, StudentsBarComponent, PersonalInfoComponent, FamilyInfoComponent,
    FoodInfoComponent],
  exports: [LoginComponent,
    MenuPanelComponent, ProfessorMenuComponent, StudentsMenuComponent,
    PhonemeComponent, PhonemeBarComponent, VocalPanelComponent, ConsonantPanelComponent, PhonemeGamePanelComponent,
    PhonemeViewComponent, BarComponent, PhonemePanelComponent, VideoPanelComponent,
    SemanticsComponent, SemanticsBarComponent, CategoriesPanelComponent, SemanticsGamePanelComponent,
    SubcategoriesComponent, SubcategoriesBarComponent, SubcategoriesPanelComponent,
    ProfessorComponent, ListComponent, RegisterComponent, StudentInfoComponent,
    FunctionBarComponent, InfoPanelComponent, StudentsBarComponent, PersonalInfoComponent, FamilyInfoComponent,
    FoodInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }

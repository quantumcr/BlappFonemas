import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SubcategoriesComponent } from './semantics/subcategories/subcategories.component';
import { SubcategoriesBarComponent } from './semantics/subcategories/subcategories-bar/subcategories-bar.component';
import { SubcategoriesPanelComponent } from './semantics/subcategories/subcategories-panel/subcategories-panel.component';
import { PhonemeViewComponent } from './phoneme-view/phoneme-view.component';
import { BarComponent } from './phoneme-view/bar/bar.component';
import { PhonemePanelComponent } from './phoneme-view/phoneme-panel/phoneme-panel.component';
import { VideoPanelComponent } from './phoneme-view/video-panel/video-panel.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { CategoriesBarComponent } from './categories-view/categories-bar/categories-bar.component';
import { CategoriesViewPanelComponent } from './categories-view/categories-view-panel/categories-view-panel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PhonemeConsonantViewComponent } from './phoneme-consonant-view/phoneme-consonant-view.component';
import { ConsonantBarComponent } from './phoneme-consonant-view/consonant-bar/consonant-bar.component';
import { ConsonantPhonemePanelComponent } from './phoneme-consonant-view/consonant-phoneme-panel/consonant-phoneme-panel.component';
import { ConsonantPhonemeVideoPanelComponent } from './phoneme-consonant-view/consonant-phoneme-video-panel/consonant-phoneme-video-panel.component';
import { CategoriesNavigationComponent } from './categories-view/categories-navigation/categories-navigation.component';
import { ConsonantNavigationComponent } from './phoneme-consonant-view/consonant-navigation/consonant-navigation.component';
import { PhonemeNavComponent } from './phoneme-view/phoneme-nav/phoneme-nav.component';
import { SignupComponent } from './signup/signup.component';
import { RestoreComponent } from './restore/restore.component';
import { CategoriesGamePanelComponent } from './semantics/categories-game-panel/categories-game-panel.component';
import { CategoriesGameComponent } from './categories-game/categories-game.component';
import { CategoriesGameBarComponent } from './categories-game/categories-game-bar/categories-game-bar.component';
import { CategoriesGameNavigationComponent } from './categories-game/categories-game-navigation/categories-game-navigation.component';




@NgModule({
  declarations: [LoginComponent,
    MenuPanelComponent, ProfessorMenuComponent, StudentsMenuComponent,
    PhonemeComponent, PhonemeBarComponent, VocalPanelComponent,
    ConsonantPanelComponent, PhonemeGamePanelComponent, PhonemeViewComponent,
    BarComponent, PhonemePanelComponent, VideoPanelComponent, PhonemeNavComponent,
    PhonemeConsonantViewComponent, ConsonantBarComponent, ConsonantPhonemePanelComponent,
    ConsonantPhonemeVideoPanelComponent, ConsonantNavigationComponent,
    SemanticsComponent, SemanticsBarComponent, CategoriesPanelComponent,
    SemanticsGamePanelComponent, SubcategoriesComponent, SubcategoriesBarComponent,
    SubcategoriesPanelComponent, CategoriesViewComponent, CategoriesBarComponent,
    CategoriesViewPanelComponent, CategoriesNavigationComponent,
    ProfessorComponent, ListComponent, RegisterComponent, StudentInfoComponent,
    FunctionBarComponent, InfoPanelComponent, StudentsBarComponent, SubcategoriesComponent,
    SubcategoriesBarComponent, SubcategoriesPanelComponent, NavigationComponent,
    SignupComponent, RestoreComponent, CategoriesGamePanelComponent,
    CategoriesGameComponent, CategoriesGameBarComponent, CategoriesGameNavigationComponent],

  exports: [LoginComponent,
    MenuPanelComponent, ProfessorMenuComponent, StudentsMenuComponent,
    PhonemeComponent, PhonemeBarComponent, VocalPanelComponent, ConsonantPanelComponent,
    PhonemeGamePanelComponent, PhonemeViewComponent, BarComponent, PhonemePanelComponent,
    VideoPanelComponent, PhonemeNavComponent,
    PhonemeConsonantViewComponent, ConsonantBarComponent, ConsonantPhonemePanelComponent,
    ConsonantPhonemeVideoPanelComponent, SemanticsComponent, SemanticsBarComponent,
    CategoriesPanelComponent, SemanticsGamePanelComponent,
    SubcategoriesComponent, SubcategoriesBarComponent, SubcategoriesPanelComponent,
    CategoriesViewComponent, CategoriesBarComponent, CategoriesViewPanelComponent,
    CategoriesNavigationComponent, ProfessorComponent, ListComponent, RegisterComponent,
    StudentInfoComponent, FunctionBarComponent, InfoPanelComponent, StudentsBarComponent,
    SubcategoriesComponent, SubcategoriesBarComponent, SubcategoriesPanelComponent,
    NavigationComponent, SignupComponent, RestoreComponent, CategoriesGamePanelComponent,
    CategoriesGameComponent, CategoriesGameBarComponent, CategoriesGameNavigationComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ]
})
export class ComponentsModule { }

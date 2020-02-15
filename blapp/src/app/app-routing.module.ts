import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'docentes',
    loadChildren: () => import('./pages/docentes/docentes.module').then( m => m.DocentesPageModule)
  },
  {
    path: 'fonemas',
    loadChildren: () => import('./pages/fonemas/fonemas.module').then( m => m.FonemasPageModule)
  },
  {
    path: 'semanticas',
    loadChildren: () => import('./pages/semanticas/semanticas.module').then( m => m.SemanticasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

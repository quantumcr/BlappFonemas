import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'docentes',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/docentes/docentes.module').then( m => m.DocentesPageModule)
  },
  {
    path: 'fonemas',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/fonemas/fonemas.module').then( m => m.FonemasPageModule)
  },
  {
    path: 'semanticas',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/semanticas/semanticas.module').then( m => m.SemanticasPageModule)
  },
  {
    path: 'estudiantes',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'fonema/:value',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/fonema/fonema.module').then( m => m.FonemaPageModule)
  },
  {
    path: 'categoria',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'consonantes/:value',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/consonantes/consonantes.module').then( m => m.ConsonantesPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

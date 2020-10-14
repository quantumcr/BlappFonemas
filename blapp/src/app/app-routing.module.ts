import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuard } from './guards/auth.guard';
import {NologinGuard} from './guards/nologin.guard';
const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule), canActivate: [NologinGuard]
  },
  {
    path: 'menu',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'docentes',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/docentes/docentes.module').then( m => m.DocentesPageModule)
  },
  {
    path: 'fonemas',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/fonemas/fonemas.module').then( m => m.FonemasPageModule)
  },
  {
    path: 'semanticas',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/semanticas/semanticas.module').then( m => m.SemanticasPageModule)
  },
  {
    path: 'estudiantes',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'fonema',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/fonema/fonema.module').then( m => m.FonemaPageModule)
  },
  {
    path: 'categoria',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'consonantes',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/consonantes/consonantes.module').then( m => m.ConsonantesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule), canActivate: [NologinGuard]
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./pages/recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },  {
    path: 'juego-semanticas',
    loadChildren: () => import('./pages/juego-semanticas/juego-semanticas.module').then( m => m.JuegoSemanticasPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

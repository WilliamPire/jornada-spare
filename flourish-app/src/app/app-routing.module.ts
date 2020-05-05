import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './guards/authorized.guard';
import { FramePage } from './pages/shared/frame/frame.page';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginPageModule) },
  {
    path: '',
    component: FramePage,
    canActivate: [AuthorizedGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
      { path: 'iniciante', loadChildren: () => import('./pages/nivel0/iniciante/iniciante.module').then(m => m.IniciantePageModule) },
      { path: 'leigo', loadChildren: () => import('./pages/nivel/leigo/leigo.module').then(m => m.LeigoPageModule) },
      { path: 'investidor', loadChildren: () => import('./pages/jornada/investidor/investidor.module').then(m => m.InvestidorPageModule) },
      { path: 'sair', loadChildren: () => import('./pages/usuario/logout/sair/sair.module').then(m => m.SairPageModule) },
      { path: 'novo', loadChildren: () => import('./pages/usuario/registrar/novo/novo.module').then(m => m.NovoPageModule) },
      { path: 'pontuacao', loadChildren: () => import('./pages/usuario/jornada/pontuacao/pontuacao.module').then(m => m.PontuacaoPageModule) }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
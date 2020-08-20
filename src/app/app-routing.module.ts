import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { NetworkAwarePreloadStrategy } from './shared/preload-strategies/preload-network';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: 'home',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },

  { path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },

  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {preloadingStrategy: NetworkAwarePreloadStrategy,}
    )
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../404/404.component';
import { AccountComponent } from './account.component';
import { AccountProfileComponent } from './profile/profile.component';
import { LoggedInGuard } from '../shared/guards/auth-user.guard';


const routes: Routes = [
  { path: '', component: AccountComponent, canActivate: [LoggedInGuard],
      children: [
        { path: '', redirectTo: 'profile', pathMatch: 'full' },
        { path: 'profile', component: AccountProfileComponent }
    ]
  }
];


/**
 * Routing module.
 */
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ],

  declarations: []
})
export class AccountRoutingModule { }

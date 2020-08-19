import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';


const routes: Routes = [
  {
    path: '', component: CoreComponent
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
export class CoreRoutingModule { }

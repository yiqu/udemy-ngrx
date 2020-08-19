import { NgModule } from '@angular/core';
import { TopNavComponent } from './top-nav.component';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MaterialModuleBundle,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],

  exports: [
    TopNavComponent
  ],

  declarations: [
    TopNavComponent
  ],

  providers: [
  ],

})
export class TopNavModule {
}

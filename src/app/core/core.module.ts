import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { MaterialModuleBundle } from '../shared/material-bundle.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModuleBundle,
    CoreRoutingModule
  ],

  exports: [

  ],

  declarations: [
    CoreComponent
  ],

  providers: [

  ],
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { TwitterComponent } from './twitter.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle
  ],

  exports: [

  ],

  declarations: [
    TwitterComponent
  ],

  providers: [],

})
export class TwitterModule { }

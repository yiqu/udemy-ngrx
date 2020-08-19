import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
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

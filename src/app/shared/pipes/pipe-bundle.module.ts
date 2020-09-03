import { NgModule } from '@angular/core';
import { DateDisplayPipe } from './time-utils.pipe';

@NgModule({
  imports: [],

  exports: [
    DateDisplayPipe,
  ],

  declarations: [
    DateDisplayPipe,
  ],

  providers: [],
})
export class PipeBundleModule { }

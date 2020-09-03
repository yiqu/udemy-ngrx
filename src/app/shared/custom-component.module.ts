import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NewTweetDialogComponent } from './new-tweet-dialog/new-tweet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleBundle } from './material-bundle.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle
  ],

  exports: [

  ],

  declarations: [NewTweetDialogComponent],

  providers: [

  ],
})
export class CustomComponentsModule { }

import { NgModule } from '@angular/core';
import { TwitterComponent } from './twitter.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { TwitterRoutingModule } from './twitter-routing.module';
import { TwitterCoreComponent } from './core/core.component';
import { TweetDetailComponent } from './tweet-detail/detail.component';
import { TweetDisplayComponent } from './tweet-display/display.component';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    PipeBundleModule,
    TwitterRoutingModule
  ],

  exports: [

  ],

  declarations: [
    TwitterComponent,
    TwitterCoreComponent,
    TweetDetailComponent,
    TweetDisplayComponent
  ],

  providers: [

  ],

})
export class TwitterModule { }

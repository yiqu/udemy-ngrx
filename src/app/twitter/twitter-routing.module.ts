import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterComponent } from './twitter.component';
import { TweetDetailComponent } from './tweet-detail/detail.component';
import { TwitterCoreComponent } from './core/core.component';


const routes: Routes = [
  { path: '', component: TwitterComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: TwitterCoreComponent },
        { path: ':tweetId', component: TweetDetailComponent },
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
export class TwitterRoutingModule { }

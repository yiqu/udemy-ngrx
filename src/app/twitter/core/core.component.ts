import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { Tweet } from 'src/app/shared/models/tweet.model';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInDownOnEnterAnimation, fadeOutDownOnLeaveAnimation,
  fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-twitter-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.css'],
  animations: [
    fadeInDownOnEnterAnimation(),
    fadeOutDownOnLeaveAnimation(),
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class TwitterCoreComponent implements OnInit, OnDestroy {

  constructor(public ts: TwitterService, public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  onEditTweet(t: Tweet) {
    this.router.navigate(['../', t.id], {relativeTo: this.route});
  }

  onRefresh() {
    this.ts.getAllTweets();
  }

  ngOnDestroy() {

  }
}

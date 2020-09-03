import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { Tweet } from 'src/app/shared/models/tweet.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-twitter-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.css']
})
export class TwitterCoreComponent implements OnInit, OnDestroy {

  constructor(public ts: TwitterService, public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  onEditTweet(t: Tweet) {
    this.router.navigate(['../', t.id], {relativeTo: this.route});
  }

  ngOnDestroy() {

  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTweetSelectors from '../ngrx-stores/tweets/tweets-entity.selector';
import { TwitterService } from './twitter.service';


@Component({
  selector: 'app-twitter-core',
  templateUrl: 'twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit, OnDestroy {

  title: string = "Welcome to NgTwitter!";


  constructor(private store: Store, public ts: TwitterService) {

  }

  ngOnInit() {
    this.ts.getAllTweets();
  }

  onGoToAll() {

  }

  onNewTweet() {

  }

  ngOnDestroy() {

  }
}

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Tweet } from 'src/app/shared/models/tweet.model';

@Component({
  selector: 'app-twitter-tweet-display',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css']
})

export class TweetDisplayComponent implements OnInit, OnDestroy {

  @Input()
  tweetData: Tweet;

  @Output()
  tweetEdit: EventEmitter<Tweet> = new EventEmitter<Tweet>();

  constructor() {

  }

  ngOnInit() {

  }

  onEdit() {
    this.tweetEdit.emit(this.tweetData);
  }

  ngOnDestroy() {

  }
}

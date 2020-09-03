import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTweetSelectors from '../ngrx-stores/tweets/tweets-entity.selector';
import { TwitterService } from './twitter.service';
import { MatDialog } from '@angular/material/dialog';
import { NewTweetDialogComponent } from '../shared/new-tweet-dialog/new-tweet.component';


@Component({
  selector: 'app-twitter-core',
  templateUrl: 'twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit, OnDestroy {

  title: string = "Welcome to NgTwitter!";


  constructor(private store: Store, public ts: TwitterService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.ts.getAllTweets();
  }

  onGoToAll() {

  }

  onNewTweet() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTweetDialogComponent, {
      minWidth: '450px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {

  }
}

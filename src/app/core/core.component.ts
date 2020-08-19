import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Tweet } from '../shared/models/tweet.model';
import { RestService } from '../shared/services/rest.service';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx-stores/global-store/app.reducer';


@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, OnDestroy {

  title: string = "All Tweets";
  allTweets: Tweet;

  constructor(private rs: RestService, private store: Store) {
  }

  ngOnInit() {
    this.getAllTweets();
  }

  getAllTweets() {
    this.rs.getData<Tweet[]>("tweets.json").subscribe((d)=>console.log(d))
  }

  ngOnDestroy() {

  }
}

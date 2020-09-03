import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Tweet } from '../shared/models/tweet.model';
import { Store } from '@ngrx/store';
import * as fromTweetSelectors from '../ngrx-stores/tweets/tweets-entity.selector';


@Component({
  selector: 'app-core-with-resolver',
  templateUrl: 'cwr.component.html',
  styleUrls: ['./cwr.component.css']
})
export class CoreWithResolverComponent implements OnInit, OnDestroy {

  allTweets$: Observable<Tweet[]> = this.store.select(fromTweetSelectors.getAllTweetsSelector);

  constructor(private router: Router, private route: ActivatedRoute, private store: Store) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}

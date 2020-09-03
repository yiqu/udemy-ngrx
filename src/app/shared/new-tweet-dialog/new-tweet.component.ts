import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as fUtils from '../utils/form.utils';
import { TweetsService } from '../services/tweets.service';
import { Tweet } from '../models/tweet.model';
import { TwitterService } from 'src/app/twitter/twitter.service';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';


@Component({
  selector: 'app-shared-dialog-tweet',
  templateUrl: 'new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetDialogComponent implements OnInit, OnDestroy {

  tweetFg: FormGroup;
  compDest$: Subject<any> = new Subject<any>();

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewTweetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: {}, public ts: TwitterService) {
      this.ts.lastTimeNewTweetDialogClosed$.pipe(
        takeUntil(this.compDest$),
        filter((res: number) => {
          return res > 0;
        })
      )
      .subscribe(
        (state) => {
          console.log(state)
          this.onCancel();
        }
      )
  }

  ngOnInit() {
    this.tweetFg = this.fb.group({
      userName: fUtils.createFormControl2(null, false, [Validators.required]),
      content: fUtils.createFormControl2(null, false, [Validators.required])
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onTweet() {
    if (this.tweetFg.valid) {
      const values: {userName: string, content: string} = this.tweetFg.value;
      const dateTime = new Date().getTime();
      const newTweet: Tweet = {
        userName: values.userName,
        content: values.content,
        date: dateTime,
        id: null
      };
      this.ts.postNewTweet(newTweet);
    }
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}

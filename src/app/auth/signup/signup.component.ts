import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as fu from '../../shared/utils/form.utils';
import * as em from '../../shared/error-matchers/error-state.matcher';

@Component({
  selector: 'app-auth-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy {

  accountType: string = "Qu Tweets";
  matcher: ErrorStateMatcher = new em.AfterActionsErrorStateMatcher();
  signInTitle: string = "Create your Qu Twitter Account.";
  avartarImgSrc: string = "assets/banner/logo.png";
  signFg: FormGroup;
  compDest$: Subject<any> = new Subject<any>();
  errorMsg: string;
  errorOccured: boolean;
  loading: boolean;

  get emailFc(): FormControl {
    return <FormControl>this.signFg.get("email");
  }

  get passwordFc(): FormControl {
    return <FormControl>this.signFg.get("password");
  }

  get repasswordFc(): FormControl {
    return <FormControl>this.signFg.get("repassword");
  }

  constructor(public fb: FormBuilder, public as: AuthService, public router: Router) {

      let id: string = null;
      let pw: string = null;

      if (!environment.production) {
        id = "t@test.com";
        pw = "123456";
      }


      this.signFg = this.fb.group({
        email: fu.createFormControl(id, false, [Validators.required, Validators.email]),
        password: fu.createFormControl(pw, false, [Validators.required]),
        repassword: fu.createFormControl(pw, false, [Validators.required])
      });
  }

  ngOnInit() {

  }

  onSignupClick() {

  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}

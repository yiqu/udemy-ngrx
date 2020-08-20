import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as fu from '../../shared/utils/form.utils';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as fromAuthActions from '../redux/auth.actions';

@Component({
  selector: 'app-auth-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  signInTitle: string = "Sign in with your Qu Twitter Account";
  avartarImgSrc: string = "assets/banner/logo.png";
  signFg: FormGroup;
  compDest$: Subject<any> = new Subject<any>();
  errorMsg: string;
  errorOccured: boolean;
  loading: boolean;

  get idFc(): FormControl {
    return <FormControl>this.signFg.get("id");
  }

  get passwordFc(): FormControl {
    return <FormControl>this.signFg.get("password");
  }

  constructor(public fb: FormBuilder, public router: Router, private as: AuthService) {

    let id: string = null;
    let pw: string = null;


    if (!environment.production) {
      id = "test@test.com";
      pw = "123456";
    }

    this.signFg = this.fb.group({
      id: fu.createFormControl(id, false, [Validators.required, Validators.email]),
      password: fu.createFormControl(pw, false),
      saveSession: fu.createFormControl(true, false)
    });
  }

  ngOnInit() {

  }

  onForgotPassword() {
    this.router.navigate(['/', 'auth', 'reset']);
  }

  onSignInClick() {
    if (this.signFg.valid) {
      if (this.passwordFc.value && this.passwordFc.value.trim()!=="") {
        const email = this.idFc.value;
        const pw = this.passwordFc.value;
        this.as.signInUser(email, pw).subscribe(
          (res) => {
          },
          (err) => {
          },
          () => {
          }
        )
      }
    }
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}

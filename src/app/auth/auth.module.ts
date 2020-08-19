import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoadingSpinnerModule } from '../shared/spinner/loading.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponentModule } from '../404/404.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuthReducer from './redux/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    LoadingSpinnerModule,
    NotFoundComponentModule,
    StoreModule.forFeature('auth', fromAuthReducer.authReducer),
    AuthRoutingModule
  ],

  exports: [

  ],

  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent
  ],

  providers: [

  ],
})
export class AuthModule { }

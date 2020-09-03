import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponentModule } from './404/404.module';
import { MaterialModuleBundle } from './shared/material-bundle.module';
import { TopNavModule } from './top-nav/top-nav.module';
import { AppRoutingModule } from './app-routing.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers, metaReducers } from './ngrx-stores/global-store/app.reducer';
import { AuthModule } from './auth/auth.module';
import { appEffects } from './ngrx-stores/global-store/app.effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CoreWithResolverComponent } from './core-with-resolver/cwr.component';
import * as fromRouteSerializer from './ngrx-stores/router/router-serializer';


@NgModule({
  declarations: [
    AppComponent,
    CoreWithResolverComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NotFoundComponentModule,
    MaterialModuleBundle,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TopNavModule,
    SideNavModule,
    AuthModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      extendedTimeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      newestOnTop: true,
      iconClasses : {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      }
    }),
    StoreModule.forRoot(appReducers, {
      metaReducers,
      runtimeChecks : {
          strictStateImmutability: true,
          strictActionImmutability: true,
         // strictActionSerializability: true, // Action props have to be POJOs, can not be classes
          //strictStateSerializability: true // State properties have to be POJOs, can not be classes
      }
  }),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 30
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: "myRouter",
      routerState: RouterState.Minimal,
      //serializer: fromRouteSerializer.CustomRouteStateSerializer
    }),
    AppRoutingModule,
  ],

  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

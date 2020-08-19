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

@NgModule({
  declarations: [
    AppComponent
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
    AppRoutingModule,
  ],

  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

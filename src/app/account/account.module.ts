import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountProfileComponent } from './profile/profile.component';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],

  exports: [],

  declarations: [
    AccountComponent,
    AccountProfileComponent
  ],

  providers: [],
})
export class AccountModule { }

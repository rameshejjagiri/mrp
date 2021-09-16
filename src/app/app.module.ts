import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemberHomeComponent } from './member-home/member-home.component';
import { MemberRegisterComponent } from './member-register/member-register.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './auth-service/auth-guard.service';
import { MemberAddDependentComponent } from './member-add-dependent/member-add-dependent.component';
import { MemberEditDependentComponent } from './member-edit-dependent/member-edit-dependent.component';
import { MemberDependentDetailsComponent } from './member-dependent-details/member-dependent-details.component';
import { MemberSubmitClaimsComponent } from './member-submit-claims/member-submit-claims.component';
import { MemberClaimsListComponent } from './member-claims-list/member-claims-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberHomeComponent,
    MemberRegisterComponent,
    MemberLoginComponent,
    MemberEditComponent,
    MemberAddDependentComponent,
    MemberEditDependentComponent,
    MemberDependentDetailsComponent,
    MemberSubmitClaimsComponent,
    MemberClaimsListComponent,
    MemberClaimsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

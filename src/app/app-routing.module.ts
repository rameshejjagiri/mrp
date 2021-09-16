import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth-service/auth-guard.service';
import { MemberAddDependentComponent } from './member-add-dependent/member-add-dependent.component';
import { MemberClaimsListComponent } from './member-claims-list/member-claims-list.component';
import { MemberDependentDetailsComponent } from './member-dependent-details/member-dependent-details.component';
import { MemberEditDependentComponent } from './member-edit-dependent/member-edit-dependent.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberHomeComponent } from './member-home/member-home.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MemberRegisterComponent } from './member-register/member-register.component';
import { MemberSubmitClaimsComponent } from './member-submit-claims/member-submit-claims.component';


const routes: Routes = [
  { path: '', component: MemberLoginComponent },
  { path: 'login', component: MemberLoginComponent },
  { path: 'register', component: MemberRegisterComponent },
  { path: 'home', component: MemberHomeComponent,canActivate: [AuthGuard] },
  { path: 'member-update-details', component: MemberEditComponent,canActivate: [AuthGuard] },
  { path: 'member-claims', component: MemberClaimsListComponent,canActivate: [AuthGuard] },
  { path: 'member-dependents-list', component: MemberDependentDetailsComponent,canActivate: [AuthGuard] },
  { path: 'member-submit-claim', component: MemberSubmitClaimsComponent,canActivate: [AuthGuard] },
  { path: 'member-add-dependent', component: MemberAddDependentComponent,canActivate: [AuthGuard] },
  {path: 'member-edit-dependent/:dependentId', component:MemberEditDependentComponent, pathMatch: 'full' ,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

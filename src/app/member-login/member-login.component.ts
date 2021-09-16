import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth-service/auth.service';
import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {
  memberLoginForm = new FormGroup({});
  member: Member;
  loginMember: Member;
  submitted = false;
  emial: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private memberService: MemberService, private toastr: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
    this.memberLoginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*")]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9])(?=.*[@$!%*?&]).{8,}')]],

    });

  }

  get f() { return this.memberLoginForm.controls; }

  onLogin() {
    this.submitted = true;
    this.member = this.memberLoginForm.value;
    this.loginMember = this.memberService.findMemberByEmailId(this.member.email)

    if (this.loginMember == undefined) {
      localStorage.setItem('isAuthenticated', '0');
      this.toastr.error('Invalid credentials');
    }

    if (this.member.email === this.loginMember.email && this.member.password === this.loginMember.password) {
      localStorage.setItem('isAuthenticated', '1');
      localStorage.setItem('memberId', this.loginMember.id);
      this.authService.loginSubject.next(true)
      this.toastr.success('logged in success');
      this.router.navigate(['/home']);
    } else {
      this.toastr.error('login failed');
    }


  }



}

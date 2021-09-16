import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { bounceOutDownOnLeaveAnimation, fadeInOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { MemberService } from '../services/member.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.css']


})
export class MemberHomeComponent implements OnInit {

  memberId: any;

  membersList: Member[] = [];
  member: Member;


  constructor(private toastr: ToastrService, private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberId = localStorage.getItem('memberId');
    this.membersList = this.memberService.getMembersList();
    this.member = this.memberService.getMemberById(this.memberId);
    console.log(this.member.email);

  }

  onUpdate() {
    this.toastr.warning('Hi Ramesh');
  }

  deleteById(emailId: string) {
    this.memberService.deleteById(emailId);
    this.toastr.success('Deleted Successfully');
    this.membersList = this.memberService.getMembersList();

  }

}

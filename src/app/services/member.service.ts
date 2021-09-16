import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  member: any;
  members: any;

  static membersList: Member[] = [{
    id: "R-0001",
    address: "Hyderabad",
    contactNo: "9999999999",
    country: "India",
    dob: "1995-09-07",
    email: "ramesh1@gmail.com",
    name: "Ramesh Ejjagiri",
    pan: "abnpe3890j",
    password: "Ramesh@234",
    state: "Telangana"
  }, {
    id: "R-0002",
    address: "Kukatpally",
    contactNo: "9999999999",
    country: "India",
    dob: "1997-09-07",
    email: "ramesh2@gmail.com",
    name: "Ejjagiri Ramesh",
    pan: "abnpe3890j",
    password: "Ramesh@234",
    state: "Telangana"
  }];

  constructor(private http: HttpClient) { }


  saveMember(member: Member) {
    MemberService.membersList.push(member);
    console.log(MemberService.membersList);
    alert('From Service Members list' + MemberService.membersList);
  }

  updateMember(member: Member) {
    console.log('Updated Address ' + member.address);
    this.member = MemberService.membersList.find(mem => mem.id == member.id);
    console.log('Member ' + this.member.address);
    const index = MemberService.membersList.indexOf(this.member, 0);
    console.log('Index value ' + index);

    if (index > -1) {
      const index = MemberService.membersList.indexOf(this.member, 0);
      MemberService.membersList[index] = member;

    } else {
      console.log('Error While Updating ');
    }

  }

  getMembersList() {
    return MemberService.membersList;
  }

  deleteById(memberId: string) {

    this.members = MemberService.membersList.find(member => member.id == memberId);

    const index = MemberService.membersList.indexOf(this.members, 0);
    if (index > -1) {
      MemberService.membersList.splice(index, 1);
    }
  }

  findMemberByEmailId(emailId: string): Member {
    MemberService.membersList.find(member => {
      if (member.email == emailId) {
        this.member = member
      }
    })
    return this.member;
  }
  getMemberById(memberId: string): Member {
    this.members = MemberService.membersList.find(member => member.id == memberId);
    return this.members;
  }




}

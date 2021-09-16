import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AgeValidator } from '../custom-validators/custom-validator';
import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  memberRegistrationForm: any = {};
  submitted = false;
  age: any;
  member: Member;
  readOnly: boolean;
  memberId: any;


  countryList: Array<any> = [
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'India', cities: ['Andhra pradesh', 'Telangana', 'Tamil Nadu'] },
  ];

  cities: Array<any> = [];

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private memberService: MemberService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.memberId = localStorage.getItem('memberId');
    this.member = this.memberService.getMemberById(this.memberId);
    this.countryList.push(this.member.country);
    this.changeCountry(this.member.country);

    this.memberRegistrationForm = this.formBuilder.group({
      id: [this.member.id, [Validators.required]],
      name: [this.member.name, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      pan: [this.member.pan, [Validators.required, Validators.pattern("^[A-Za-z]{5}[0-9]{4}[A-Za-z]$")]],
      contactNo: [this.member.contactNo, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9 ]{10}")]],
      dob: [this.member.dob, [Validators.required]],
      email: [this.member.email, [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*")]],
      password: [this.member.password, [Validators.required, Validators.minLength(8), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9])(?=.*[@$!%*?&]).{8,}')]],
      address: [this.member.address, [Validators.required]],
      country: [this.member.country, [Validators.required]],
      state: [this.member.state, [Validators.required]]
    }, {
      validator: AgeValidator('dob')
    });
  }

  get f() { return this.memberRegistrationForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.member = this.memberRegistrationForm.value;
    console.log('Updated Form Data ' + JSON.stringify(this.member));
    if (this.memberRegistrationForm.invalid) {
      alert('From invalid' + JSON.stringify(this.member));
      return;
    }
    this.memberService.updateMember(this.member);
    this.router.navigate(['home']);
  }

  changeCountry(count: any) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AgeValidator } from '../custom-validators/custom-validator';
import { MemberService } from '../services/member.service';
import { RandomIdGenService } from '../services/random-id-gen.service';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrls: ['./member-register.component.css']
})
export class MemberRegisterComponent implements OnInit {

  memberRegistrationForm: any = {};
  submitted = false;
  age: any;
  member: any;


  countryList: Array<any> = [
    { name: 'India', cities: ['Andhra Pradesh', 'Telangana', 'Tamil Nadu'] },
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing'] },

  ];

  cities: Array<any> = [];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService,
    private toastr: ToastrService,
    private randomIdGen: RandomIdGenService) { }

  ngOnInit(): void {
    this.memberRegistrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      pan: ['', [Validators.required, Validators.pattern("^[A-Za-z]{5}[0-9]{4}[A-Za-z]$")]],
      contactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9 ]{10}")]],
      dob: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*")]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9])(?=.*[@$!%*?&]).{8,}')]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]]
    }, {
      validator: AgeValidator('dob')
    });

  }

  get f() { return this.memberRegistrationForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.member = this.memberRegistrationForm.value;


    console.log(JSON.stringify(this.member));
    if (this.memberRegistrationForm.invalid || this.ageCalculator(this.member.dob) < 18) {
      if (this.memberRegistrationForm.invalid) {
        this.toastr.error('All fields are mandatory');
      }
      if (this.ageCalculator(this.member.dob) < 18) {
        this.toastr.error('Age must be greater then 18 years');
      }
      return;
    }
    else {
      this.member.id = 'R-' + this.randomIdGen.getFourDigitRandomId();
      this.memberService.saveMember(this.member);
      alert(JSON.stringify(this.ageCalculator(this.member.dob)))
      this.router.navigate(['login']);
    }
  }

  changeCountry(count: any) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }

  ageCalculator(checkAge: Date) {
    if (checkAge) {
      console.log("calculating age");
      const convertAge = new Date(checkAge);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
    return this.age
  }





}

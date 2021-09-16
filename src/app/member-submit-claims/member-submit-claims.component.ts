import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DischargeDateValidator } from '../custom-validators/custom-validator';
import { MemberClaim } from '../models/member-claims';
import { MemberDependent } from '../models/member-dependent';
import { MemberClaimsService } from '../services/member-claims.service';
import { MemberDependentService } from '../services/member-dependent.service';
import { MemberService } from '../services/member.service';
import { RandomIdGenService } from '../services/random-id-gen.service';


@Component({
  selector: 'app-member-submit-claims',
  templateUrl: './member-submit-claims.component.html',
  styleUrls: ['./member-submit-claims.component.css']
})
export class MemberSubmitClaimsComponent implements OnInit {
  submitted = false;
  @Input() cDischargeDate: Date = new Date;
  @Input() cAdmissionDate: Date = new Date;
  membersIdList: string[] = [];
  searchTerm: string;
  memberClaimForm: FormGroup = new FormGroup({});
  loggedInMemberId: any;
  claim: MemberClaim;
  member: any;
  dependent: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private tostr: ToastrService,
    private route: Router,
    private memberClaimService: MemberClaimsService,
    private memberDependentSevice: MemberDependentService,
    private memberService: MemberService,
    private randomIdGen: RandomIdGenService


  ) { }

  ngOnInit(): void {

    this.loggedInMemberId = localStorage.getItem("memberId");
    this.membersIdList.push(this.loggedInMemberId);
    this.memberClaimForm = this.formBuilder.group({
      memberId: ['', [Validators.required]],
      cFirstName: ['', [Validators.required]],
      cLastName: ['', [Validators.required]],
      cAdmissionDate: ['', [Validators.required]],
      cDischargeDate: ['', [Validators.required]],
      cDob: ['', [Validators.required]],
      cAmount: ['', [Validators.required]],
      cProviderName: ['', [Validators.required]]

    });

  }
  get f() { return this.memberClaimForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.memberClaimForm.invalid) {
      this.tostr.error("All Fieds are Mandatory");
      console.log('Claim form is not valid');
      return;
    }
    console.log("Admission Date:" + this.cAdmissionDate + "Discharge Date:" + this.cDischargeDate)
    if (this.cAdmissionDate <= this.cDischargeDate) {
      console.log(this.memberClaimForm.value);
      this.loggedInMemberId = localStorage.getItem("memberId");
      this.claim = this.memberClaimForm.value;
      this.claim.claimId = this.randomIdGen.getTenDigitRandomId();
      this.memberClaimService.submitClaim(this.memberClaimForm.value);
      this.tostr.success("Claim Submitted Successfully");
      this.memberClaimForm.reset();
      this.route.navigate(['/home'], { relativeTo: this.activatedRoute })
    }
    else {

      this.tostr.error("Date of admission should be on or before date of discharge");
    }

  }

  onChange(searchTerm: any) {

    this.searchTerm = searchTerm.target.value;
    if (this.loggedInMemberId == this.searchTerm) {
      this.member = this.memberService.getMemberById(this.searchTerm);
      this.memberClaimForm = this.formBuilder.group({
        memberId: [this.member.id, [Validators.required]],
        cFirstName: [this.member.name, [Validators.required]],
        cLastName: [this.member.name, [Validators.required]],
        cAdmissionDate: ['', [Validators.required]],
        cDischargeDate: ['', [Validators.required,]],
        cDob: [this.member.dob, [Validators.required]],
        cAmount: ['', [Validators.required]],
        cProviderName: ['', [Validators.required,]]
      }, {
        validator: DischargeDateValidator('cAdmissionDate', 'cDischargeDate')
      });
    }
    else {
      this.dependent = this.memberDependentSevice.getDependentByDependentId(this.searchTerm);
      console.log(this.dependent + ' ' + searchTerm);
      this.memberClaimForm = this.formBuilder.group({
        memberId: [this.dependent.dependentId, [Validators.required]],
        cFirstName: [this.dependent.dependentFirstName, [Validators.required]],
        cLastName: [this.dependent.dependentLastName, [Validators.required]],
        cAdmissionDate: ['', [Validators.required]],
        cDischargeDate: ['', [Validators.required]],
        cDob: [this.dependent.dependentDOB, [Validators.required]],
        cAmount: ['', [Validators.required]],
        cProviderName: ['', [Validators.required]]
      });
    }
  }

  getMemberIdList(x: any) {
    this.membersIdList = [];
    this.searchTerm = x.target.value;
    console.log(this.memberDependentSevice.getDependentsByMemberId(this.loggedInMemberId).map(depedent => depedent.dependentId));
    this.membersIdList.push(this.loggedInMemberId);
    Array.prototype.push.apply(this.membersIdList, this.memberDependentSevice.getDependentsByMemberId(this.loggedInMemberId).map(depedent => depedent.dependentId));
    console.log(this.membersIdList);

  }

}







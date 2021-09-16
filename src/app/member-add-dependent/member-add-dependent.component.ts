import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Member } from '../models/member';
import { MemberDependent } from '../models/member-dependent';
import { MemberDependentService } from '../services/member-dependent.service';
import { MemberService } from '../services/member.service';
import { RandomIdGenService } from '../services/random-id-gen.service';

@Component({
  selector: 'app-member-add-dependent',
  templateUrl: './member-add-dependent.component.html',
  styleUrls: ['./member-add-dependent.component.css']
})
export class MemberAddDependentComponent implements OnInit {

  @Input() dependentDOB: Date = new Date;
  @Input() memberId: any;
  private currentDate = new Date();
  dependent: MemberDependent;
  submitted = false;
  dependentForm: FormGroup = new FormGroup({});


  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private memberDependentService: MemberDependentService,
    private randomIdGen: RandomIdGenService
  ) { }

  ngOnInit() {
    {
      this.memberId = localStorage.getItem("memberId");
      this.dependentForm = this.formBuilder.group({
        dependentFirstName: ['', [Validators.required]],
        dependentDOB: ['', [Validators.required]],
        dependentLastName: ['', [Validators.required]],
        memberId: ['', [Validators.required]]

      });
    }
  }

  get f() { return this.dependentForm.controls; }
  // ddfdsf
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.dependentForm.invalid) {
      return;
    }

    console.log(" Dependent DOB:" + this.dependentDOB + "Current Date" + new Date())

    if (new Date(this.dependentDOB) < new Date(this.currentDate) &&
      ((new Date(this.dependentDOB) != new Date(this.currentDate)))) {

      console.log("dependent form" + this.dependentForm.value);
      this.dependent = this.dependentForm.value;
      this.dependent.dependentId = 'R-' + this.randomIdGen.getFourDigitRandomId();
      this.memberDependentService.addDependent(this.dependent);
      this.toastr.success("Added the dependent details  successfully")
      this.router.navigate(['/home'], { relativeTo: this.route })
    }
    else {
      this.toastr.error("Selected Date of Birth should not be greater than Current Date");
    }
  }


}

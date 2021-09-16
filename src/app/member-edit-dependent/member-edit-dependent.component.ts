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
  selector: 'app-member-edit-dependent',
  templateUrl: './member-edit-dependent.component.html',
  styleUrls: ['./member-edit-dependent.component.css']
})
export class MemberEditDependentComponent implements OnInit {



  @Input() dependentDOB: Date = new Date;
  @Input() memberId: any;
  private currentDate = new Date();
  dependent: any;
  dependentId: any;
  submitted = false;
  dependentForm: FormGroup = new FormGroup({});


  constructor(
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private memberDependentService: MemberDependentService,
    private randomIdGen: RandomIdGenService
  ) { }

  ngOnInit() {

    // this.memberId = localStorage.getItem("memberId");
    this.dependentForm = this.formBuilder.group({
      dependentFirstName: ['', [Validators.required]],
      dependentDOB: ['', [Validators.required]],
      dependentLastName: ['', [Validators.required]],
      memberId: ['', [Validators.required]],
      dependentId: ['', [Validators.required]]

    });

    this.activatedRoute.params.subscribe(params => {
      this.dependentId = params['dependentId'];
    });

    this.dependent = this.memberDependentService.getDependentByDependentId(this.dependentId);

  }

  get f() { return this.dependentForm.controls; }
  // ddfdsf
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.dependentForm.invalid) {
      return;
    }
    console.log("dependent form" + this.dependentForm.value);
    this.dependent = this.dependentForm.value;
    this.dependentDOB = this.dependent.dependentDOB;
    console.log(" Dependent DOB:" + this.dependentDOB + "Current Date" + new Date())
    if (new Date(this.dependentDOB) < new Date(this.currentDate) &&
      ((new Date(this.dependentDOB) != new Date(this.currentDate)))) {
      this.memberDependentService.updateDependent(this.dependent);
      this.toastr.success("dependent details updated successfully")
      this.router.navigate(['/home'], { relativeTo: this.activatedRoute })
    }
    else {
      this.toastr.error("Selected Date of Birth should not be greater than Current Date");
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MemberDependent } from '../models/member-dependent';
import { MemberDependentService } from '../services/member-dependent.service';

@Component({
  selector: 'app-member-dependent-details',
  templateUrl: './member-dependent-details.component.html',
  styleUrls: ['./member-dependent-details.component.css']
})
export class MemberDependentDetailsComponent implements OnInit {
  dependents: MemberDependent[];
  memberId: any;
  dependetnt: any;

  constructor(private memberDependentService: MemberDependentService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.memberId = localStorage.getItem('memberId');
    this.dependents = this.memberDependentService.getDependentsByMemberId(this.memberId);
    console.log(this.dependents);

  }
  deleteDependent(dependentId: string) {
    this.dependetnt = this.dependents.find(dependent => dependent.dependentId == dependentId);

    const index = this.dependents.indexOf(this.dependetnt, 0);
    if (index > -1) {
      this.dependents.splice(index, 1);
      this.toast.success('Dependent deleted');
    } else {
      this.toast.error('Error while deleting..');

    }

  }

}

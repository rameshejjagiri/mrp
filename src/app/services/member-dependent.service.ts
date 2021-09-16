import { Injectable } from '@angular/core';
import { MemberDependent } from '../models/member-dependent';

@Injectable({
  providedIn: 'root'
})
export class MemberDependentService {

  static dependentsList: MemberDependent[] = [];
  dependent: any;

  constructor() { }

  addDependent(dependent: MemberDependent) {
    MemberDependentService.dependentsList.push(dependent);
    console.log(MemberDependentService.dependentsList)
  }
  getDependentsByMemberId(memberId: string): MemberDependent[] {

    return MemberDependentService.dependentsList.filter(dependent => dependent.memberId == memberId);
  }

  getDependentByDependentId(dependentId: string) {
    return MemberDependentService.dependentsList.find(dependent => dependent.dependentId == dependentId);
  }

  updateDependent(dependent: MemberDependent) {
    this.dependent = MemberDependentService.dependentsList.find(dependent => dependent.dependentId == dependent.dependentId);
    const index = MemberDependentService.dependentsList.indexOf(this.dependent, 0);
    if (index > -1) {
      const index = MemberDependentService.dependentsList.indexOf(this.dependent, 0);
      MemberDependentService.dependentsList[index] = this.dependent;
      
    } else {
      //this.toast.error('Error while deleting..');


    }

  }

}

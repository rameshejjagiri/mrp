import { Injectable } from '@angular/core';
import { MemberClaim } from '../models/member-claims';

@Injectable({
  providedIn: 'root'
})
export class MemberClaimsService {

  static claimsList: MemberClaim[] = [];

  constructor() { }

  submitClaim(claim: MemberClaim) {
    MemberClaimsService.claimsList.push(claim);
    console.log(MemberClaimsService.claimsList);
  }

  getClaimsList(): MemberClaim[] {
    return MemberClaimsService.claimsList;
  }
  getClaimByClaimId(claimId: string) {
    return MemberClaimsService.claimsList.find(claim => claim.claimId == claimId);
  }






}

import { Component, OnInit } from '@angular/core';
import { MemberClaim } from '../models/member-claims';
import { MemberClaimsService } from '../services/member-claims.service';

@Component({
  selector: 'app-member-claims-list',
  templateUrl: './member-claims-list.component.html',
  styleUrls: ['./member-claims-list.component.css']
})
export class MemberClaimsListComponent implements OnInit {

  claimsList: MemberClaim[];

  constructor(private memberClaimService: MemberClaimsService) { }

  ngOnInit(): void {

    this.claimsList = this.memberClaimService.getClaimsList();


  }





}

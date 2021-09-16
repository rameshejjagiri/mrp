export class MemberClaim {
    claimId: string;
    cFirstName: string;
    cLastName: string;
    cAdmissionDate: Date;
    cDischargeDate: Date;
    cDob: Date;
    cAmount: number;
    cProviderName: string;
    memberId: string;

    constructor(
        claimId: string,
        cFirstName: string,
        cLastName: string,
        cAdmissionDate: Date,
        cDischargeDate: Date,
        cDob: Date,
        cAmount: number,
        cProviderName: string,
        memberId: string) {
        this.claimId = claimId;
        this.cFirstName = cFirstName;
        this.cLastName = cLastName;
        this.cAdmissionDate = cAdmissionDate;
        this.cDischargeDate = cDischargeDate;
        this.cDob = cDob;
        this.cAmount = cAmount;
        this.cProviderName = cProviderName;
        this.memberId = memberId;
    }


}

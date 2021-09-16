export class MemberDependent {
    dependentId: string;
    dependentFirstName: string;
    dependentLastName: string;
    dependentDOB: string;
    memberId: string;

    constructor(dependentId: string,
        dependentFirstName: string,
        dependentLastName: string,
        dependentDOB: string,
        memberId: string) {
        this.dependentFirstName = dependentFirstName;
        this.dependentLastName = dependentLastName;
        this.dependentDOB = dependentDOB;
        this.dependentId = dependentId;
        this.memberId = memberId;
    }

}
import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function DischargeDateValidator(cAdmissionDate: string, cDischargeDate: string) {
    return (formGroup: FormGroup) => {
        const cAdmissionDat = formGroup.controls[cAdmissionDate];
        const cDischargeDat = formGroup.controls[cDischargeDate];

        if (cDischargeDat.errors && !cDischargeDat.errors.isDateValid) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (!(cAdmissionDat.value <= cDischargeDat.value)) {
            cDischargeDat.setErrors({ isDateValid: true });
        }
    }
}
export function AgeValidator(memberDob: string) {
    return (formGroup: FormGroup) => {
        const dob = formGroup.controls[memberDob];
        const convertAge = new Date(dob.value);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
       
        if (dob.errors && !dob.errors.isAgeValid) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (age < 18) {
            dob.setErrors({ isAgeValid: true });
        }
    }
}




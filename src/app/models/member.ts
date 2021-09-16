
export class Member {
    id: string;
    name: string;
    pan: string;
    contactNo: string;
    dob: string;
    email: string;
    password: string;
    address: string;
    country: string;
    state: string;


    constructor(id: string, name: string,
        pan: string,
        contactNo: string,
        dob: string,
        email: string,
        password: string,
        address: string,
        country: string,
        state: string) {

        this.id = id;
        this.name = name;
        this.pan = pan;
        this.contactNo = contactNo;
        this.dob = dob;
        this.email = email;
        this.password = password;
        this.address = address;
        this.country = country;
        this.state = state;




    }



}
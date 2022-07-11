
  export class Address{
    constructor( addressLine1: string ,
        addressLine2: string,
        city :  string ,
        postalCode :  string ,
        country :  string ,
        mobile :  string ,
        mailId :  string ,
        userId:number,
        contactPerson :  string 
     )
    {
        this.addressLine1=addressLine1;
        this.addressLine2=addressLine2;
        this.city=city;
        this.postalCode=postalCode;
        this.country=country;
        this.mobile=mobile;
        this.mailId=mailId;
        this.userId=userId;
        this.contactPerson=contactPerson;
    }
    addressLine1: string 
    addressLine2: string;
    city :  string ;
    postalCode :  string ;
    country :  string ;
    mobile :  string ;
    mailId :  string ;
    userId:number;
    contactPerson :  string ;
 
}
import {Customer} from "./customer";

export class Request{
    id: number;
    customer:Customer;
    description: string;
    justification: string;
    dateNeeded: Date;
    deliveryMode: string;
    status: string;
    total: number;
    submittedDate: Date;
    reasonForRejection: string;
    

    constructor(id:number=0, customer=new Customer(), description='',justification = '',
    dateNeeded = new Date(),deliveryMode ='', status = ' ', total = 0, submittedDate = new Date(),
     reasonForRejection = ''){
            this.id = id;
            this.customer = customer;
            this.description = description;
            this.justification = justification;;
            this.dateNeeded = dateNeeded;
            this.deliveryMode = deliveryMode;
            this.status = status;
            this.total = total;
            this.submittedDate = submittedDate;
            this.reasonForRejection = reasonForRejection;
            
        }
    


}
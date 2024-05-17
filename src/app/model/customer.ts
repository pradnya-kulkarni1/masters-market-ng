export class Customer{
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;

    constructor(id:number=0, username='', password='', firstname = '', 
        lastname = '', phone='', email='', address = '', city='', state='', zip=''){

            this.id = id;
            this.username = username;
            this.password = password;
            this.firstname = firstname;
            this.lastname = lastname;
            this.phone = phone;
            this.email = email;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
        }
}
import {Injectable} from '@angular/core';
import { Consultant } from 'src/app/consultant';

@Injectable({
    providedIn:'root'
})
export class ConsultantService{

    consultants:Consultant[]=[
     {name:'Tom',phone:'223333',location:'Mumbai',qualification:'MBA',yearsOfExperience:'3-5',specialities:'Marketing',industry:'Marketing'},
     {name:'Tom1',phone:'223333',location:'Chennai',qualification:'BE',yearsOfExperience:'1-2',specialities:'Automobile Design',industry:'Automobile'},
     {name:'Tom2',phone:'223333',location:'Bangalore',qualification:'MA',yearsOfExperience:'5-10',specialities:'Oil Painting',industry:'Fine Arts'},
     {name:'Tom3',phone:'223333',location:'Pune',qualification:'MBBS',yearsOfExperience:'3-5',specialities:'General Practitioner',industry:'Medicine'},
     {name:'Tom4',phone:'223333',location:'Goa',qualification:'BE',yearsOfExperience:'10-20',specialities:'Full Stack Development',industry:'IT'}
    ];

    getConsultants(location:string,industry:string,years:string){
        return this.consultants;
    }
}
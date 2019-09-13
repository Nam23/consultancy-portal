import {Injectable} from '@angular/core';
import { Consultant } from 'src/app/consultant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn:'root'
})
export class ConsultantService{
    consultants:Consultant[];
    constructor(private http: HttpClient) { }
    // consultants:Consultant[]=[
    //  {name:'Tom',phone:'223333',location:'Mumbai',qualification:'MBA',yearsOfExperience:'3-5',specialities:'Marketing',industry:'Marketing'},
    //  {name:'Tom1',phone:'223333',location:'Chennai',qualification:'BE',yearsOfExperience:'1-2',specialities:'Automobile Design',industry:'Automobile'},
    //  {name:'Tom2',phone:'223333',location:'Bangalore',qualification:'MA',yearsOfExperience:'5-10',specialities:'Oil Painting',industry:'Fine Arts'},
    //  {name:'Tom3',phone:'223333',location:'Pune',qualification:'MBBS',yearsOfExperience:'3-5',specialities:'General Practitioner',industry:'Medicine'},
    //  {name:'Tom4',phone:'223333',location:'Goa',qualification:'BE',yearsOfExperience:'10-20',specialities:'Full Stack Development',industry:'IT'}
    // ];

    getConsultants():Observable<Consultant[]>{
        
        return this.http.get<Consultant[]>(`http://localhost:4000/consultants`);
    }
    
    register(consultant: Consultant) {
        return this.http.post(`http://localhost:4000/consultants/register`, consultant);
    }

    // delete(id: number) {
    //     return this.http.delete(`http://localhost:4000/users/${id}`);
    // }
}
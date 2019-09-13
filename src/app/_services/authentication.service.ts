import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Consultant } from 'src/app/consultant';
import { Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn:'root'})
export class AuthenticationService{
private currentConsultantSubject:BehaviorSubject<Consultant>;
private currentConsultant:Observable<Consultant>;

                                                                                    
constructor(private http: HttpClient) {
    this.currentConsultantSubject = new BehaviorSubject<Consultant>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentConsultant = this.currentConsultantSubject.asObservable();
}

public get currentConsultantValue(): Consultant {
    return this.currentConsultantSubject.value;
}
public get currentConsultantVal():Observable<Consultant>{
    return this.currentConsultant;
}
login(mail, password) {
    return this.http.post<any>(`http://localhost:4000/consultants/authenticate`, { mail, password }).pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentConsultantSubject.next(<Consultant>user);
            return user;
        }));
}

logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentConsultantSubject.next(null);
}
}
import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import {AuthenticationService} from '../_services/authentication.service';

@Injectable()
export class JWTInterceptor  implements HttpInterceptor{

constructor(private authenticationService:AuthenticationService){

    }

    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
     let currentUser= this.authenticationService.currentConsultantValue;
     if (currentUser && currentUser.token) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    }

    return next.handle(request);
    }

}
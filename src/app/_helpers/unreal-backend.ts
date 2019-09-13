import { Injectable} from '@angular/core';
import {HttpRequest,HttpResponse,HttpHandler,HttpEvent,HttpInterceptor,HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable,of,throwError} from 'rxjs';
import {delay,mergeMap,materialize,dematerialize} from 'rxjs/operators';

let users= JSON.parse(localStorage.getItem('users')) ||[];

@Injectable()
export class UnrealBackendInterceptor implements HttpInterceptor{

    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        const {url,method,headers,body} =request;

        return <any>of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
         
        function handleRoute(){
            switch(true){
                case url.endsWith('/consultants/authenticate') && method ==='POST':
                    return authenticate();
                case url.endsWith('/consultants/register') && method==='POST':
                    return register();
                case url.endsWith('/consultants') && method === 'GET': 
                    return getUsers();
                default:
                    return next.handle(request);
            }
        }

        function authenticate(){
            const{mail,password}=body;
            const user = users.find(x=>x.mail === mail && x.password=== password);
            if(!user) return error("Username or password is incorrect");
            return ok({
             id: user.id,
             mail: user.mail,
             firstname: user.firstName,
             lastname:user.lastName,
             token: 'dummy-jwt-token'

            }

            )
        }

        function register(){
            const user=body
            console.log(user);
            if(users.find(x=>x.mail=== user.mail)){
                return error('Account with email id "'+user.mail +'" already exits!')
            }
            user.id=users.length?Math.max(...users.map(x=>x.id))+1:1;
            users.push(user);
            localStorage.setItem('users',JSON.stringify(users));
            return ok();
        }

        function getUsers(){
           // if(!isLoggedIn()) return unauthorized();
            return ok(users);
        }


        function deleteUser(){
            if(!isLoggedIn()) return unauthorized();
            users=users.filter(x=>x.id!== idFromUrl());
            localStorage.setItem('users',JSON.stringify(users));
            return ok();
        }

        function ok(body?){
            return of(new HttpResponse({status:200,body}))
        }

        function error(message){
            return throwError({error:{message}});
        }

        function unauthorized(){
            return throwError({status:401,error:{meaage:'Unauthorized'}});
        }

        function isLoggedIn(){
            return headers.get('Authorization') ==='Bearer dummy-jwt-token';
        }

        function idFromUrl(){
            const urlParts=url.split('/');
            return parseInt(urlParts[urlParts.length-1]);
        }

    }
}

export const UnrealBackendProvider={

    provide:HTTP_INTERCEPTORS,
    useClass:UnrealBackendInterceptor,
    multi:true
};

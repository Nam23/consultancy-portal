import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import {first} from 'rxjs/operators';
import { AlertService } from 'src/app/_services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm:FormGroup;
   loading=false;
   submitted=false;
   returnUrl:String;

  constructor(
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private authenticationService:AuthenticationService,
    private alertService: AlertService

  ) {
    if (this.authenticationService.currentConsultantValue) {
      this.router.navigate(['/']);
  }
   }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      mail:['',Validators.required],
      password: ['',Validators.required]
    });

    //this.returnUrl=this.route.snapshot.queryParams['returnUrl']||'/';
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    this.alertService.clear();
    if(this.loginForm.invalid){
      return;
    }
    this.loading=true;
    this.authenticationService.login(this.f.mail.value,this.f.password.value)
    .pipe(first())
    .subscribe(
      data=>{
         // this.alertService.success("Login Successful! Welcome!")
         
          this.router.navigate(['/']);
      },
      error=>{ 
        this.alertService.error(error);
        this.loading=false;
        
      }
    )
  }

}

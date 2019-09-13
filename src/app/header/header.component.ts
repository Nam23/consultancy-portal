import { Component, OnInit } from '@angular/core';
import { ConsultantService } from 'src/app/consultant.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string;
  login:boolean;
  id:string;
  constructor(private cservice:ConsultantService,private auth:AuthenticationService,private navroute:Router){

  }
  ngOnInit(){

  this.auth.currentConsultantVal.subscribe(data=>{
    if(data){
      this.login=true;
      this.username=data.firstname+' '+data.lastname;
      this.id=data.id;
     }
     else{
       this.login=false;
     }
  })
  
  }

  logout(){
    this.auth.logout();
    this.login=false;
    this.navroute.navigate(['/']);
  }
}

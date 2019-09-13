import { Component, OnInit } from '@angular/core';
import { Consultant } from 'src/app/consultant';
import { ConsultantService } from 'src/app/consultant.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { filter,map } from 'rxjs/internal/operators';
@Component({
  selector: 'app-consultant-profile',
  templateUrl: './consultant-profile.component.html',
  styleUrls: ['./consultant-profile.component.css']
})
export class ConsultantProfileComponent implements OnInit {
  consultant:Consultant;
  allowEdit:boolean=false;
  constructor(private cservice:ConsultantService,private route:ActivatedRoute,private auth:AuthenticationService) { }

  ngOnInit() {

    this.route.params.subscribe((params:Params)=>{
      this.cservice.getConsultants().subscribe(res=>{
        this.consultant=res.filter( r => r.id == params['id']).shift();
        console.log(this.consultant.password);
      });
  

      this.auth.currentConsultantVal.subscribe(data=>{
        if(data){
          if(data.id==params['id']){
         this.allowEdit=true;
         }
         else{
           this.allowEdit=false;
         }
        }
      })
    });
    
  }

}

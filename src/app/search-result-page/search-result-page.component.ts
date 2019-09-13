import { Component, OnInit } from '@angular/core';
import { Consultant } from 'src/app/consultant';
import { ConsultantService } from 'src/app/consultant.service';
import { ActivatedRoute, Params } from '@angular/router';
import { filter,map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {
  consultants:Consultant[]=[];
  constructor(private cservice:ConsultantService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams:Params)=>{console.log(queryParams['years']);
      this.cservice.getConsultants().pipe(map( results =>{
          return results.filter( r => r.location == queryParams['location']).
          filter(r => r.industry == queryParams['industry']);
         
       
      })
      ).subscribe(res=>{
        
        
        if(this.route.snapshot.queryParamMap.get('years')){
          this.consultants=res.filter(r => r.yearsofexperience == queryParams['years']);
        }
        else
        this.consultants=res;
        
      });
  
    });

    
    
  }

}

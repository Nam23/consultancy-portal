import { Component, OnInit } from '@angular/core';
import { Consultant } from 'src/app/consultant';
import { ConsultantService } from 'src/app/consultant.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {
  consultants:Consultant[];
  constructor(private cservice:ConsultantService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams:Params)=>{
      this.consultants=this.cservice.getConsultants(queryParams['location'],queryParams['industry'],queryParams['years']);
    });
    
    
  }

}

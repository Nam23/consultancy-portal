import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params,Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
 @ViewChild('f',{static:true})searchForm:NgForm;
 p_location:string;
 p_years:string;
 p_industry:string;
 location:string;
 years:string;
 industry:string;
  constructor(private route:ActivatedRoute,private navroute:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams:Params)=>{
      if(this.route.snapshot.queryParamMap.get('years')){
          this.p_years=queryParams['years'];
      }
      if(this.route.snapshot.queryParamMap.get('location')){
        this.p_location=queryParams['location'];
    }
    if(this.route.snapshot.queryParamMap.get('industry')){
      this.p_industry=queryParams['industry'];
  }
        
        
    });
  }
  onSubmit(){
    this.location=this.searchForm.value.location;
    this.years=this.searchForm.value.years;
    this.industry=this.searchForm.value.industry;
    this.navroute.navigate(['/search-result'],
    {queryParams:
    {location:this.searchForm.value.location,
     industry:this.searchForm.value.industry,
     years:this.searchForm.value.years}});
  }
}

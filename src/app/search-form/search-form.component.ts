import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
 @ViewChild('f',{static:true})searchForm:NgForm;
 location:string;
 years:string;
 industry:string;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.location=this.searchForm.value.location;
    this.years=this.searchForm.value.years;
    this.industry=this.searchForm.value.industry;
    this.route.navigate(['/search-result'],
    {queryParams:
    {location:this.searchForm.value.location,
     industry:this.searchForm.value.industry,
     years:this.searchForm.value.years}});
  }
}

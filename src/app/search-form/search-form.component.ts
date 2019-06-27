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
  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSubmit(){
//this.route.navigate(['/search-result']);
  }
}

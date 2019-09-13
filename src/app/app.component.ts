import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'consultancy-portal';
 position:string;
  constructor(private route:Router){
    
  }

  ngOnInit(){
  //   if(this.route.url.search('search-result')!=-1){console.log(this.route);
  //     this.position='fixed';
  //   }
  //   else
  //  this.position='relative';
  }
}

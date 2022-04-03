import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  feature:string = ''
  constructor(){
  }
  ngOnInit(): void {
  }
  activeFeature(feature:string){
    this.feature = feature;
  }
}

import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
 /*@Input() satellites: Satellite[];*/

  constructor() { }

  ngOnInit() {
  }
 /* count(type){
    let satCount=0;
    if(type=="Communication"){
      satCount++;
    }else if(type=="Probe")
    {
      satCount++;
    }else if(type=="Space Station")
    {
      satCount++;
    }else if(type=="Telescope"){
      satCount++;
    }else if(type=="Space Debris")
    {
      satCount++;
    }else{
      satCount++;
    }
  }*/

}

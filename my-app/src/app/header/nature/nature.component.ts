import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {
  visib:boolean =true;


  constructor() { }
  ilo(){
               this.visib = !this.visib;

  }



  ngOnInit() {
  }

}
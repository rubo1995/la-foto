import { Component, OnInit } from '@angular/core';
import {stringify} from "querystring";



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


  public items:{name:string,age:number,}[] =[
    {
      name:'ton',
      age:100,



    },
    {
      name:'bolton',
      age:100,
    },
    {
      name:'jakcson',
      age:100,
    },

  ];



  constructor() {}


ngOnInit() {

  }

}

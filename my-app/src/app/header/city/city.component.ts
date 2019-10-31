import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {


  public imgCode = 0;
  public Images:any=[
    {id:1, code:'nkar1', url:"./././assets/face/k1.jpg"},
    {id:2, code:'nkar2',url:"./././assets/face/k2.jpg"},
    {id:3,code:'nkar3', url:"./././assets/face/k3.jpg"},
    {id:4, code:'nkar4',url:"./././assets/face/k4.jpg"},
    {id:5,code:'nkar5', url:"./././assets/face/k5.jpg"},
    {id:6,code:'nkar6', url:"./././assets/face/k6.jpg"},
    {id:7, code:'nkar7',url:"./././assets/face/k7.jpg"},
    {id:8, code:'nkar8',url:"./././assets/face/k8.jpg"},
    {id:9, code:'nkar9',url:"./././assets/face/k9.jpg"},
    {id:10, code:'nkar10',url:"./././assets/face/k10.jpg"},
    {id:11,code:'nkar1l', url:"./././assets/face/k11.jpg"},
    {id:12, code:'nkar12',url:"./././assets/face/k12.jpg"},

  ];

  pic(code){

    console.log(this.imgCode = code);

  }

  constructor() {


  }


  ngOnInit() {
  }

}

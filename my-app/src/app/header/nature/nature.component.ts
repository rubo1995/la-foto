import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {


public imgCode = 0;
  public Images:any=[
    {id:1, code:'nkar1', url:"./././assets/face/1.jpg"},
    {id:2, code:'nkar2',url:"./././assets/face/2.jpg"},
    {id:3,code:'nkar3', url:"./././assets/face/3.jpg"},
    {id:4, code:'nkar4',url:"./././assets/face/4.jpg"},
   {id:5,code:'nkar5', url:"./././assets/face/5.jpg"},
   {id:6,code:'nkar6', url:"./././assets/face/6.jpg"},
    {id:7, code:'nkar7',url:"./././assets/face/7.jpg"},
    {id:8, code:'nkar8',url:"./././assets/face/8.jpg"},
    {id:9, code:'nkar9',url:"./././assets/face/9.jpg"},
    {id:10, code:'nkar10',url:"./././assets/face/10.jpg"},
    {id:11,code:'nkar1l', url:"./././assets/face/11.jpg"},
    {id:12, code:'nkar12',url:"./././assets/face/12.jpg"},
    /*{id:13, code:'nkar13', url:"./././assets/face/13.jpg"},
    {id:15, code:'nkar15', url:"./././assets/face/15.jpg"},
    {id:14, code:'nkar14',url:"./././assets/face/14.jpg"},
    {id:16, code:'nkar16',url:"./././assets/face/16.jpg"},
    {id:17,code:'nkar17', url:"./././assets/face/17.jpg"},
    {id:18,code:'nkar18', url:"./././assets/face/18.jpg"},
    {id:19, code:'nkar19',url:"./././assets/face/19.jpg"},
    {id:20, code:'nkar20',url:"./././assets/face/20.jpg"},
    {id:21, code:'nkar21',url:"./././assets/face/21.jpg"},
    {id:22, code:'nkar22',url:"./././assets/face/22.jpg"},
    {id:23,code:'nkar23', url:"./././assets/face/23.jpg"},
    {id:24, code:'nkar24',url:"./././assets/face/24.jpg"},
    {id:25,code:'nkar25', url:"./././assets/face/25.jpg"},
    {id:26, code:'nkar26',url:"./././assets/face/26.jpg"},
    {id:27, code:'nkar27', url:"./././assets/face/27.jpg"},
    {id:28, code:'nkar28',url:"./././assets/face/28.jpg"},
    {id:29,code:'nkar29', url:"./././assets/face/29.jpg"},
    {id:30, code:'nkar30',url:"./././assets/face/30.jpg"},
    {id:31,code:'nkar31', url:"./././assets/face/21.jpg"},
    {id:32,code:'nkar32', url:"./././assets/face/32.jpg"},
    {id:33, code:'nkar33',url:"./././assets/face/33.jpg"},
    {id:34, code:'nkar34',url:"./././assets/face/34.jpg"},
    {id:35, code:'nkar35',url:"./././assets/face/35.jpg"},
    {id:36, code:'nkar36',url:"./././assets/face/36.jpg"},
    {id:37,code:'nkar37', url:"./././assets/face/37.jpg"},
    {id:38, code:'nkar38',url:"./././assets/face/38.jpg"},
    {id:39,code:'nkar39', url:"./././assets/face/39.jpg"},
    {id:40, code:'nkar40',url:"./././assets/face/40.jpg"},*/
  ];

                      //  visib:boolean =true;
  pic(code){

      console.log(this.imgCode = code);

  }


  constructor() {

  }



  ngOnInit() {
  }

}

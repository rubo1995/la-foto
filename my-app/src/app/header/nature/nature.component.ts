import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  code:'string';
public imgCode = 0;
  public Images:any=[
    {id:1, code:'nkar1', url:"./././assets/1.jpg"},
    {id:2, code:'nkar2',url:"./././assets/2.jpg"},
    {id:3,code:'nkar3', url:"./././assets/3.jpg"},
    {id:4, code:'nkar4',url:"./././assets/4.jpg"},
   {id:5,code:'nkar5', url:"./././assets/5.jpg"},
    {id:6,code:'nkar6', url:"./././assets/6.jpg"},
    {id:7, code:'nkar7',url:"./././assets/7.jpg"},
    {id:8, code:'nkar8',url:"./././assets/8.jpg"},
    {id:9, code:'nkar9',url:"./././assets/9.jpg"},
    {id:10, code:'nkar10',url:"./././assets/10.jpg"},
    {id:11,code:'nkar1l', url:"./././assets/11.jpg"},
    {id:12, code:'nkar12',url:"./././assets/12.jpg"},
    {id:13, code:'nkar13', url:"./././assets/13.jpg"},
    {id:14, code:'nkar14',url:"./././assets/14.jpg"},
    {id:16, code:'nkar16',url:"./././assets/16.jpg"},
    {id:17,code:'nkar17', url:"./././assets/17.jpg"},
    {id:18,code:'nkar18', url:"./././assets/18.jpg"},
    {id:19, code:'nkar19',url:"./././assets/19.jpg"},
    {id:20, code:'nkar20',url:"./././assets/20.jpg"},
    {id:21, code:'nkar21',url:"./././assets/21.jpg"},
    {id:22, code:'nkar22',url:"./././assets/22.jpg"},
    {id:23,code:'nkar23', url:"./././assets/23.jpg"},
    {id:24, code:'nkar24',url:"./././assets/24.jpg"},
    {id:25,code:'nkar25', url:"./././assets/25.jpg"},
    {id:26, code:'nkar26',url:"./././assets/26.jpg"},
    {id:27, code:'nkar27', url:"./././assets/27.jpg"},
    {id:28, code:'nkar28',url:"./././assets/28.jpg"},
    {id:29,code:'nkar29', url:"./././assets/29.jpg"},
    {id:30, code:'nkar30',url:"./././assets/30.jpg"},
    {id:31,code:'nkar31', url:"./././assets/21.jpg"},
    {id:32,code:'nkar32', url:"./././assets/32.jpg"},
    {id:33, code:'nkar33',url:"./././assets/33.jpg"},
    {id:34, code:'nkar34',url:"./././assets/34.jpg"},
    {id:35, code:'nkar35',url:"./././assets/35.jpg"},
    {id:36, code:'nkar36',url:"./././assets/36.jpg"},
    {id:37,code:'nkar37', url:"./././assets/37.jpg"},
    {id:38, code:'nkar38',url:"./././assets/38.jpg"},
    {id:39,code:'nkar39', url:"./././assets/39.jpg"},
    {id:40, code:'nkar40',url:"./././assets/40.jpg"},
  ];

                      //  visib:boolean =true;
  pic(code){
    // for (const i of this.Images) {
      // if(i.code === code){
      //   this.imgCode.push(i) 
      //   console.log(this.imgCode)
      //   return;
      // }

    // }
      console.log(this.imgCode = code);

// console.log(this.Images.code)
// console.log("hghh")
//     this.Images = this.Images.code;

  }


  constructor() {

  }


  onClick(){
  //  this.visib = !this.visib;
 // this. curent = "any";



  }

  ngOnInit() {
  }

}

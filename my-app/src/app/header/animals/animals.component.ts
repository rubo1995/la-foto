import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

                ////////input\\\\\\\\\\

/*<input class="my-form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" [(ngModel)]="search">
  <button class="my-btn btn-outline-success my-2 my-sm-0" type="submit"><h6 class="search">Search</h6></button>
*/



  public imgCode = 0;
  public Images:any=[
    {id:1, code:'nkar1', url:"./././assets/face/a1.jpg"},
    {id:2, code:'nkar2',url:"./././assets/face/a2.jpg"},
    {id:3,code:'nkar3', url:"./././assets/face/a3.jpg"},
    {id:4, code:'nkar4',url:"./././assets/face/a4.jpg"},
    {id:5,code:'nkar5', url:"./././assets/face/a5.jpg"},
    {id:6,code:'nkar6', url:"./././assets/face/a6.jpg"},
    {id:7, code:'nkar7',url:"./././assets/face/a7.jpg"},
    {id:8, code:'nkar8',url:"./././assets/face/a8.jpg"},
    {id:9, code:'nkar9',url:"./././assets/face/a9.jpg"},
    {id:10, code:'nkar10',url:"./././assets/face/a10.jpg"},
    {id:11,code:'nkar1l', url:"./././assets/face/a11.jpg"},
    {id:12, code:'nkar12',url:"./././assets/face/a12.jpg"},
    /* {id:13, code:'nkar13', url:"./././assets/face/a13.jpg"},
    {id:15, code:'nkar15', url:"./././assets/face/a15.jpg"},
    {id:14, code:'nkar14',url:"./././assets/face/a14.jpg"},
    {id:16, code:'nkar16',url:"./././assets/face/a16.jpg"},
    {id:17,code:'nkar17', url:"./././assets/face/a17.jpg"},
    {id:18,code:'nkar18', url:"./././assets/face/a18.jpg"},
    {id:19, code:'nkar19',url:"./././assets/face/a19.jpg"},
    {id:20, code:'nkar20',url:"./././assets/face/a20.jpg"},
    {id:21, code:'nkar21',url:"./././assets/face/a21.jpg"},
    {id:22, code:'nkar22',url:"./././assets/face/a22.jpg"},
    {id:23,code:'nkar23', url:"./././assets/face/a23.jpg"},
    {id:24, code:'nkar24',url:"./././assets/face/a24.jpg"},
    {id:25,code:'nkar25', url:"./././assets/face/a25.jpg"},
    {id:26, code:'nkar26',url:"./././assets/face/a26.jpg"},
    {id:27, code:'nkar27', url:"./././assets/face/a27.jpg"},
    {id:28, code:'nkar28',url:"./././assets/face/a28.jpg"},
    {id:29,code:'nkar29', url:"./././assets/face/a29.jpg"},
    {id:30, code:'nkar30',url:"./././assets/face/a30.jpg"},
    {id:31,code:'nkar31', url:"./././assets/face/a21.jpg"},
    {id:32,code:'nkar32', url:"./././assets/face/a32.jpg"},
    {id:33, code:'nkar33',url:"./././assets/face/a33.jpg"},
    {id:34, code:'nkar34',url:"./././assets/face/a34.jpg"},
    {id:35, code:'nkar35',url:"./././assets/face/a35.jpg"},
    {id:36, code:'nkar36',url:"./././assets/face/a36.jpg"},
    {id:37,code:'nkar37', url:"./././assets/face/a37.jpg"},
    {id:38, code:'nkar38',url:"./././assets/face/a38.jpg"},
    {id:39,code:'nkar39', url:"./././assets/face/a39.jpg"},
    {id:40, code:'nkar40',url:"./././assets/face/a40.jpg"},*/
  ];

  pic(code){

    console.log(this.imgCode = code);

  }

constructor() {

}

ngOnInit() {

}



}



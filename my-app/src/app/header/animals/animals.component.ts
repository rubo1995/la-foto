import { Component, OnInit } from '@angular/core';
import {getClassName} from "codelyzer/util/utils";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  visib:boolean =true;
constructor() {

}
  oopo(){
  this.visib =!this.visib;
  }

ngOnInit() {

}



}



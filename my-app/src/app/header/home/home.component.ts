import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations";
import {timer} from "rxjs";
import set = Reflect.set;
import {getClassName} from "codelyzer/util/utils";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    function move() {

      document.getElementById("one").style.display = "block";

      setTimeout(function oto() {
        document.getElementById("one").style.display = "none";
      }, 5000);

      setTimeout(function oto() {
        document.getElementById("two").style.display = "block";
      }, 5000);
      setTimeout(function oto() {
        document.getElementById("two").style.display = "none";
      }, 10000);
      setTimeout(function oto() {
        document.getElementById("three").style.display = "block";
      }, 10000);
      setTimeout(function oto() {
        document.getElementById("three").style.display = "none";
      }, 15000);
      setTimeout(function oto() {
        document.getElementById("for").style.display = "block";
      }, 15000);
      setTimeout(function oto() {
        document.getElementById("for").style.display = "none";
      }, 20000);
      setTimeout(function oto() {
        document.getElementById("five").style.display = "block";
      }, 20000);
      setTimeout(function oto() {
        document.getElementById("five").style.display = "none";
      }, 25000);
      setTimeout(function oto() {
        document.getElementById("six").style.display = "block";
      }, 25000);
      setTimeout(function oto() {
        document.getElementById("six").style.display = "none";
      }, 30000);
      setTimeout(function oto() {
        document.getElementById("seven").style.display = "block";
      }, 30000);
      setTimeout(function oto() {
        document.getElementById("seven").style.display = "none";
      }, 35000);


    }

    setInterval(move, 35000)
  }

}






































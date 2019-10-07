import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = function() {op()};
      let div = document.getElementById("ok");
     let sticky = div.offsetTop;
    function op() {
      if (window.pageYOffset > sticky) {
        div.style.backgroundColor = " #242529 ";
      }else {
        //div.style.backgroundColor = "#242529 ";
      }
    }

  }
}

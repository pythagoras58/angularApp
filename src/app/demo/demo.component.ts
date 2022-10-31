import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'DEMO APP';
  myobject = {
    color: 'red'
  };

  myArr = ['a','e','i','o', 'u'];

  course = "Angular";

  

}

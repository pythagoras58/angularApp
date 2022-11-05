import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  
  query : String;
  artists : object;

  constructor(private http: HttpClient) { 
    this.query = "Abena";
    this.artists = [];
  }

 

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(
      data=>{
        this.artists = data
      }
    );
  }


  title = 'DEMO APP';
  myobject = {
    color: 'red'
  };

  myArr = ['a','e','i','o', 'u'];

  course = "";

  showArtist(item){
    this.course = item.name;
  }

  

    

}

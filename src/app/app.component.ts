import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:any;
 
  title = 'Hellow World';
  height :number=30;
num1:number;
num2:number;
result:number;
sub:number;

add(){
  this.result=this.num1+this.num2;
}

substract(){
  this.sub=this.num1-this.num2;
}

  ngOnInit(): void {
    this.data=this.getData();
  }

  getData(){
    return [
      
      {"_id":"1",
      "title":"title 1",
      "body":"body 1"},
      {"_id":"2",
      "title":"title 2",
      "body":"body 2"},
      {"_id":"3",
      "title":"title 3",
      "body":"body 3"}
  ]
  }
}

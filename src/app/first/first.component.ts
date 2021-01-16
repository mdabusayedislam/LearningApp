import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Output() foo=new EventEmitter();
  counter:any=0;

  useFoo(){
    this.counter=this.counter+1;
    this.foo.emit(this.counter);
  }

  @Input() helloMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}

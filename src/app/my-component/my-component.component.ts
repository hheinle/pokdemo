import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  title = 'pokdemo';
  id: string = '651164654';
  constructor() { }

  ngOnInit() {
  }

}

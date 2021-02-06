import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lapa1',
  templateUrl: './lapa1.component.html',
  styleUrls: ['./lapa1.component.scss']
})
export class Lapa1Component implements OnInit {
  public counter: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  public increment(val) {
    this.counter += val;
  }
}

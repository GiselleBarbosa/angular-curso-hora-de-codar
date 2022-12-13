import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emmiter',
  templateUrl: './emmiter.component.html',
  styleUrls: ['./emmiter.component.scss']
})
export class EmmiterComponent implements OnInit {

  myNumber: number = 0;
  max: number = 100;

  @Input() pais = '';

  constructor () { }

  ngOnInit(): void {
  }

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * this.max);
  }

}

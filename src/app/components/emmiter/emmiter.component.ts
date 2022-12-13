import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emmiter',
  templateUrl: './emmiter.component.html',
  styleUrls: ['./emmiter.component.scss']
})
export class EmmiterComponent implements OnInit {

  myNumber: number = 0;
  @Input() pais = ''; 

  constructor () { }

  ngOnInit(): void {
  }

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10)
  }

}

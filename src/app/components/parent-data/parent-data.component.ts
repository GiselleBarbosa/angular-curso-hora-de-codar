import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {

  @Input() filho: string = '';
  @Input() detalhes: any;
  @Input() idade: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

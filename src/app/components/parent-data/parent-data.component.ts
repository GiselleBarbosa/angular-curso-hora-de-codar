import { Component, Input, OnInit } from '@angular/core';

export interface Detalhes {
  nome: string;
  email: string;
  senioridade: string;
  cargo: string;
}

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})

export class ParentDataComponent implements OnInit {

  @Input() name: string = '';

  @Input() detalhes: Detalhes[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}

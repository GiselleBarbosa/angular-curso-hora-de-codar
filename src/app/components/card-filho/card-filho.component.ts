import { Component, Input, OnInit } from '@angular/core';

export interface Games {
  img: string,
  title: string,
  textCategory: string,
  link: string,
  category: string;
}

@Component({
  selector: 'app-card-filho',
  templateUrl: './card-filho.component.html',
  styleUrls: ['./card-filho.component.scss']
})
export class CardFilhoComponent implements OnInit {

  @Input() games: Games[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

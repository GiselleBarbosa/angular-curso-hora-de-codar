import { Component, Input, OnInit } from '@angular/core';

export interface Games {
  img: string,
  title: string,
  text: string,
  link: string;
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

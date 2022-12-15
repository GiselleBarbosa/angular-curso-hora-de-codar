import { Component, Input, OnInit } from '@angular/core';
import { Games } from "src/app/Games";

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

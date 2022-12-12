import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  title = 'Giselle';
  nome: string = 'Giselle';
  idade: number = 33;
  job: string = "Developer";
  hobbies: string[] = ['Video-games', 'estudar', 'assistir filmes e series'];

  videoGame = {
    plataforma: 'Playstation',
    versao: 4,
    marca: 'Sony'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

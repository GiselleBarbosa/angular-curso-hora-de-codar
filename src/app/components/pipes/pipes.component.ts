import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  textPipe1 = 'uppercase - todas as letras Maiusculas';
  textPipe2 = 'titlecase - Primeira Letra de cada palavra Maiuscula';
  today = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}

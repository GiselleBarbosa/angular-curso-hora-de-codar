import { Component } from '@angular/core';
import { Detalhes } from './components/parent-data/parent-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  userName = 'Giselle Barbosa';
  nacionalidade = 'Brasil';

  tabelaUsuarios: Detalhes[] = [
    {
      nome: 'Giselle Barbosa',
      email: "giselle@mail.com",
      senioridade: "Junior",
      cargo: "Frontend Developer"
    },
    {
      nome: 'Tiago Barbosa',
      email: "tiago@mail.com",
      senioridade: "Pleno",
      cargo: "Backend Developer"
    },
    {
      nome: 'Yago Barbosa',
      email: "yagogs@mail.com",
      senioridade: "Senior",
      cargo: "Fullstack Developer"
    },
    {
      nome: 'Marcos Felipe',
      email: "mf@mail.com",
      senioridade: "Estagiario",
      cargo: "Developer frontend"
    },
  ];
}

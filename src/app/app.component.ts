import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  userName = 'Giselle Barbosa'

  nacionalidade = 'Brasil';

  detalhes = {
    role: 'Developer frontend',
    email: 'email@mail.com',
    level: 'estagiaria'
  }
}

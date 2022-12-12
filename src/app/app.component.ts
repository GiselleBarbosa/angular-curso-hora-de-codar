import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  userName = 'Giselle Barbosa'

  detalhes = {
    role: 'Developer frontend',
    email: 'email@mail.com',
    level: 'estagiaria'
  }
}

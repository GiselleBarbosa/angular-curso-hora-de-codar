import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  userName = 'Giselle Barbosa'
  idade: number = 33;

  detalhes = {
    role: 'Developer frontend',
    email: 'email@mail.com',
    level: 'Junior'
  }
}

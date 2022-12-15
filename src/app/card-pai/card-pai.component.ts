import { Component, OnInit } from '@angular/core';
import { Games } from "../card-filho/card-filho.component";

@Component({
  selector: 'app-card-pai',
  templateUrl: './card-pai.component.html',
  styleUrls: ['./card-pai.component.scss']
})
export class CardPaiComponent implements OnInit {

  existingGames: Games[] = [
    {
      img: "../../../assets/ffx.jpg",
      title: "Final Fantasy X",
      text: "teste",
      link: "teste"
    },
    {
      img: "../../../assets/re4.jpg",
      title: "Resident Evil 4",
      text: "teste",
      link: "teste"
    },
    {
      img: "../../../assets/gow.jpg",
      title: "God of War",
      text: "teste",
      link: "teste"
    },
    {
      img: "../../../assets/mk.jpg",
      title: "Final Fantasy X",
      text: "teste",
      link: "teste"
    }, 
      {
      img: "../../../assets/sonic.jpg",
      title: "Sonic HedgeHog",
      text: "teste",
      link: "teste"
    },
    {
      img: "../../../assets/destiny.jpg",
      title: "Destiny",
      text: "teste",
      link: "teste"
    }, 
    {
      img: "../../../assets/nfsu2.webp",
      title: "Need for Speed Underground 2",
      text: "teste",
      link: "teste"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

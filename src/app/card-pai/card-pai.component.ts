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
      category: "Categoria",
      textCategory: "RPG",
      link: "Comprar",
    },
    {
      img: "../../../assets/re4.jpg",
      title: "Resident Evil 4",
      category: "Categoria",
      link: "Comprar",
      textCategory: "RPG",
    },
    {
      img: "../../../assets/gow.jpg",
      title: "God of War",
      category: "Categoria",
      link: "Comprar",
      textCategory: "RPG",
    },
    {
      img: "../../../assets/mk.jpg",
      title: "Final Fantasy X",
      category: "Categoria",
      link: "Comprar",
      textCategory: "Fight",
    }, 
      {
      img: "../../../assets/sonic.jpg",
      title: "Sonic HedgeHog",
      category: "Categoria",
      link: "Comprar",
      textCategory: "Adventure",
    },
    {
      img: "../../../assets/destiny.jpg",
      title: "Destiny",
      category: "Categoria",
      link: "Comprar",
      textCategory: "Action, Adventure",
    }, 
    {
      img: "../../../assets/nfsu2.webp",
      title: "Need for Speed U2",
      category: "Categoria",
      link: "Comprar",
      textCategory: "Racing",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

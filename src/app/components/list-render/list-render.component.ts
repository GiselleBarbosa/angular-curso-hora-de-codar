import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  favoriteGames = [
    { name: "Final Fantasy X", plataform: "PS2", rating: 10, genre: "RPG"  },
    { name: "Resident Evil 4", plataform: "PS3", rating: 9.2, genre: "Action"  },
    { name: "God of War", plataform: "PS4", rating: 10, genre: "Adventure"  },
    { name: "Genshin Impact", plataform: "PS4", rating: 8.7, genre: "RPG" },
    { name: "Mortal Kombat", plataform: "ps2", rating: 9, genre: "Fight" },
    { name: "Sonic", plataform: "Mega-Drive", rating: 7, genre: "Adventure"  },
    { name: "Mobile Legends", plataform: "Android", rating: 10, genre: "MMOPG" },
    { name: "Need For Speed U2", plataform: "PS2", rating: 10, genre: "Racing" },
    
  ];

  constructor () { }

  ngOnInit(): void {
  }

}

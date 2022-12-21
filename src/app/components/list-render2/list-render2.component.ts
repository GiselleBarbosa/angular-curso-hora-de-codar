import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/internal/Subscription";
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render2',
  templateUrl: './list-render2.component.html',
  styleUrls: ['./list-render2.component.scss'],
})
export class ListRender2Component implements OnInit, OnDestroy {
  animals: Animal[] = [];

  animalDetails = '';

  inscricao!: Subscription;

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void { }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de vida!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();

  }
}
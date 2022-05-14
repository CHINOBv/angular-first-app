import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  heros: Hero[] = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' },
  ];

  herosDeleted: Hero[] = [];

  ngOnInit(): void {}

  delete(hero_id: number): void {
    const hero = this.heros.find((hero) => hero.id === hero_id)!;
    this.herosDeleted.push(hero);
    this.heros = this.heros.filter((h) => h.id !== hero_id);
  }

  unDelete(hero_id: number): void {
    const hero = this.herosDeleted.find((hero) => hero.id === hero_id)!;
    this.heros.push(hero);
    this.herosDeleted = this.herosDeleted.filter((h) => h.id !== hero_id);
  }
}

interface Hero {
  id: number;
  name: string;
}

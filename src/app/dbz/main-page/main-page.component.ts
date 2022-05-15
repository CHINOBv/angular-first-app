import { Component } from '@angular/core';

export interface ICharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent {
  characters: ICharacter[] = [
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ];
  newCharacter: ICharacter = {
    id: this.characters[this.characters.length - 1]?.id || 0 + 1,
    name: '',
    power: 0,
  };

  onNewCharacter(character: ICharacter) {
    this.characters.push({
      ...character,
      id: (this.characters[this.characters.length - 1].id || 0) + 1,
    });
  }
}

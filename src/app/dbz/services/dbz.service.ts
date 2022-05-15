import { Injectable } from '@angular/core';

export interface ICharacter {
  id: number;
  name: string;
  power: number;
}

@Injectable()
export class DbzService {
  private _characters: ICharacter[] = [
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ];
  public get characters(): ICharacter[] {
    return [...this._characters];
  }


  public createCharacter(character: ICharacter): void {
    if (!character.name.trim()) {
      return;
    }

    this._characters.push({
      ...character,
      id: (this._characters[this._characters.length - 1].id || 0) + 1,
    });
  }
}

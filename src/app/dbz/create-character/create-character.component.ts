import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICharacter } from '../main-page/main-page.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.sass'],
})
export class CreateCharacterComponent {
  newCharacter: ICharacter = {
    id: 0,
    name: '',
    power: 0,
  };

  createCharacter() {
    this.dbzService.createCharacter(this.newCharacter);
    this.newCharacter = {
      id: 0,
      name: '',
      power: 0,
    };
  };

  constructor(private dbzService: DbzService){
  }
}

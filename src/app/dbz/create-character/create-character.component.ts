import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICharacter } from '../main-page/main-page.component';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.sass'],
})
export class CreateCharacterComponent {
  @Input() newCharacter: ICharacter = {
    id: 0,
    name: '',
    power: 0,
  };

  @Output() onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();
  createCharacter() {
    if (!this.newCharacter.name.trim()) {
      return;
    }

    this.onNewCharacter.emit({ ...this.newCharacter });

    this.newCharacter = {
      id: 0,
      name: '',
      power: 0,
    };
  }
}

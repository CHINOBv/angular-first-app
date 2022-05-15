import { Component, Input, OnInit } from '@angular/core';
import {
  MainPageComponent,
  ICharacter,
} from '../main-page/main-page.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.sass'],
})
export class ListCharactersComponent {
  get characters(): ICharacter[] {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) {}
}

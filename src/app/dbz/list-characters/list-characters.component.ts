import { Component, Input, OnInit } from '@angular/core';
import { MainPageComponent, ICharacter } from '../main-page/main-page.component';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.sass']
})
export class ListCharactersComponent {
  @Input() characters: ICharacter[] = [];
}

import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

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
export class MainPageComponent {}

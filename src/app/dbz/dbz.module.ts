import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { ListCharactersItemComponent } from './list-characters-item/list-characters-item.component';

@NgModule({
  declarations: [MainPageComponent, CreateCharacterComponent, ListCharactersComponent, ListCharactersItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}

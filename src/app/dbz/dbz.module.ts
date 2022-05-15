import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CreateCharacterComponent } from './create-character/create-character.component';
import { ListCharactersItemComponent } from './list-characters-item/list-characters-item.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CreateCharacterComponent,
    ListCharactersComponent,
    ListCharactersItemComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  providers: [DbzService],
})
export class DbzModule {}

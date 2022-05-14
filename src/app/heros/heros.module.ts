import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule],
  exports: [ListComponent],
  declarations: [HeroComponent, ListComponent],
  providers: [],
})
export class HeroModule {}

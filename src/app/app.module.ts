import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heros/hero/hero.component';
import { ListComponent } from './heros/list/list.component';
import { HeroModule } from './heros/heros.module';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, HeroModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

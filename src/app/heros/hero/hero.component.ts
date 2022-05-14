import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
})

export class HeroComponent {
  public name: string = 'Hero';
  public age: number = 25;

  public getName(): string {
    return `${this.name} - ${this.age}`;
  }

  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  changeName(): void {
    this.name = 'Hero2';
  }

  changeAge(): void {
    this.age = 30;
  }

}

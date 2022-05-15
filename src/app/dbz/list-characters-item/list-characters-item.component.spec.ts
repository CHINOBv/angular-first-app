import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharactersItemComponent } from './list-characters-item.component';

describe('ListCharactersItemComponent', () => {
  let component: ListCharactersItemComponent;
  let fixture: ComponentFixture<ListCharactersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharactersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharactersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

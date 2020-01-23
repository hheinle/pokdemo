import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPokemonsComponentComponent } from './show-pokemons-component.component';

describe('ShowPokemonsComponentComponent', () => {
  let component: ShowPokemonsComponentComponent;
  let fixture: ComponentFixture<ShowPokemonsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPokemonsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPokemonsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

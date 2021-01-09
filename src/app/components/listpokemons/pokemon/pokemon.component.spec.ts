import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

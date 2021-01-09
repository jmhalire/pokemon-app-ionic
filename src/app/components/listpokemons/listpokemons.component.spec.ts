import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListpokemonsComponent } from './listpokemons.component';

describe('ListpokemonsComponent', () => {
  let component: ListpokemonsComponent;
  let fixture: ComponentFixture<ListpokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpokemonsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListpokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

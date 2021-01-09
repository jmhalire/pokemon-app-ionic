import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntertainmentComponent } from './entertainment.component';

describe('EntertainmentComponent', () => {
  let component: EntertainmentComponent;
  let fixture: ComponentFixture<EntertainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

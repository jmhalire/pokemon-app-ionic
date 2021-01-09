import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

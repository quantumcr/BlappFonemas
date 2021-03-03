import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhonemeGameNavigationComponent } from './phoneme-game-navigation.component';

describe('PhonemeGameNavigationComponent', () => {
  let component: PhonemeGameNavigationComponent;
  let fixture: ComponentFixture<PhonemeGameNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonemeGameNavigationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhonemeGameNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

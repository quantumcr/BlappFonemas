import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FonemaPage } from './fonema.page';

describe('FonemaPage', () => {
  let component: FonemaPage;
  let fixture: ComponentFixture<FonemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FonemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

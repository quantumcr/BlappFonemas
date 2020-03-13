import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsonantesPage } from './consonantes.page';

describe('ConsonantesPage', () => {
  let component: ConsonantesPage;
  let fixture: ComponentFixture<ConsonantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsonantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsonantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

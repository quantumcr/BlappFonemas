import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JuegoFonemasPage } from './juego-fonemas.page';

describe('JuegoFonemasPage', () => {
  let component: JuegoFonemasPage;
  let fixture: ComponentFixture<JuegoFonemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoFonemasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JuegoFonemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

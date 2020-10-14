import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JuegoSemanticasPage } from './juego-semanticas.page';

describe('JuegoSemanticasPage', () => {
  let component: JuegoSemanticasPage;
  let fixture: ComponentFixture<JuegoSemanticasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoSemanticasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JuegoSemanticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

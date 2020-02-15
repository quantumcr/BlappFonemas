import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemanticasPage } from './semanticas.page';

describe('SemanticasPage', () => {
  let component: SemanticasPage;
  let fixture: ComponentFixture<SemanticasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SemanticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

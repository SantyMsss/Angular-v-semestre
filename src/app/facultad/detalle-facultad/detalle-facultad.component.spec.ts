import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFacultadComponent } from './detalle-facultad.component';

describe('DetalleFacultadComponent', () => {
  let component: DetalleFacultadComponent;
  let fixture: ComponentFixture<DetalleFacultadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleFacultadComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetalleFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFacultadComponent } from './listar-facultad.component';

describe('ListarFacultadComponent', () => {
  let component: ListarFacultadComponent;
  let fixture: ComponentFixture<ListarFacultadComponent>;

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ListarFacultadComponent]
    })
    fixture = TestBed.createComponent(ListarFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

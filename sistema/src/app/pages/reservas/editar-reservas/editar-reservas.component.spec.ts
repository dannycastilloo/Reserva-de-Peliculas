import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservasComponent } from './editar-reservas.component';

describe('EditarReservasComponent', () => {
  let component: EditarReservasComponent;
  let fixture: ComponentFixture<EditarReservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReservasComponent]
    });
    fixture = TestBed.createComponent(EditarReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReservasComponent } from './crear-reservas.component';

describe('CrearReservasComponent', () => {
  let component: CrearReservasComponent;
  let fixture: ComponentFixture<CrearReservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearReservasComponent]
    });
    fixture = TestBed.createComponent(CrearReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

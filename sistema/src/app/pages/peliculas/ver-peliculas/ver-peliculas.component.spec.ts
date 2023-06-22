import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPeliculasComponent } from './ver-peliculas.component';

describe('VerPeliculasComponent', () => {
  let component: VerPeliculasComponent;
  let fixture: ComponentFixture<VerPeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPeliculasComponent]
    });
    fixture = TestBed.createComponent(VerPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

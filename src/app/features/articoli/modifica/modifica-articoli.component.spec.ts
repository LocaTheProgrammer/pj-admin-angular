import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaArticoliComponent } from './modifica-articoli.component';

describe('ModificaArticoliComponent', () => {
  let component: ModificaArticoliComponent;
  let fixture: ComponentFixture<ModificaArticoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaArticoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaArticoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

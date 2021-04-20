import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaMagazzinoComponent } from './modifica-magazzino.component';

describe('ModificaMagazzinoComponent', () => {
  let component: ModificaMagazzinoComponent;
  let fixture: ComponentFixture<ModificaMagazzinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaMagazzinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaMagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

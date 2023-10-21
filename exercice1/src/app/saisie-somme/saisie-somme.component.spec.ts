import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieSommeComponent } from './saisie-somme.component';

describe('SaisieSommeComponent', () => {
  let component: SaisieSommeComponent;
  let fixture: ComponentFixture<SaisieSommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieSommeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieSommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

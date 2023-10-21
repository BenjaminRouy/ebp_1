import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculRenduComponent } from './calcul-rendu.component';

describe('CalculRenduComponent', () => {
  let component: CalculRenduComponent;
  let fixture: ComponentFixture<CalculRenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculRenduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

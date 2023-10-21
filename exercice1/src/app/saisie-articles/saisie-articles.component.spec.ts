import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieArticlesComponent } from './saisie-articles.component';

describe('SaisieArticlesComponent', () => {
  let component: SaisieArticlesComponent;
  let fixture: ComponentFixture<SaisieArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

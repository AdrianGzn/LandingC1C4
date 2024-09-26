import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlantsComponent } from './card-plants.component';

describe('CardPlantsComponent', () => {
  let component: CardPlantsComponent;
  let fixture: ComponentFixture<CardPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

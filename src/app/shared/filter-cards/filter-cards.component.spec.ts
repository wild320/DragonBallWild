import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCardsComponent } from './filter-cards.component';

describe('FilterCardsComponent', () => {
  let component: FilterCardsComponent;
  let fixture: ComponentFixture<FilterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

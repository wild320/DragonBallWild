import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleResultModalComponent } from './battle-result-modal.component';

describe('BattleResultModalComponent', () => {
  let component: BattleResultModalComponent;
  let fixture: ComponentFixture<BattleResultModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleResultModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleResultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

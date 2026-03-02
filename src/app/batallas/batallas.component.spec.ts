import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallasComponent } from './batallas.component';

describe('BatallasComponent', () => {
  let component: BatallasComponent;
  let fixture: ComponentFixture<BatallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatallasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

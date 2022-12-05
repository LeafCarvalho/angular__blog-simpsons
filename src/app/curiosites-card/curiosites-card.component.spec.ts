import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriositesCardComponent } from './curiosites-card.component';

describe('CuriositesCardComponent', () => {
  let component: CuriositesCardComponent;
  let fixture: ComponentFixture<CuriositesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriositesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriositesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

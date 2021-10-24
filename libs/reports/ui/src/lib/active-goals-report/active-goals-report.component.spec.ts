import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveGoalsReportComponent } from './active-goals-report.component';

describe('ActiveGoalsReportComponent', () => {
  let component: ActiveGoalsReportComponent;
  let fixture: ComponentFixture<ActiveGoalsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveGoalsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveGoalsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

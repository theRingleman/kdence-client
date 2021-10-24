import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedGoalsReportComponent } from './completed-goals-report.component';

describe('CompletedGoalsReportComponent', () => {
  let component: CompletedGoalsReportComponent;
  let fixture: ComponentFixture<CompletedGoalsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedGoalsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedGoalsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

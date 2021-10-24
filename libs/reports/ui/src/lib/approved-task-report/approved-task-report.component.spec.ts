import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTaskReportComponent } from './approved-task-report.component';

describe('ApprovedTaskReportComponent', () => {
  let component: ApprovedTaskReportComponent;
  let fixture: ComponentFixture<ApprovedTaskReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedTaskReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedTaskReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

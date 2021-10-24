import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTaskReportComponent } from './completed-task-report.component';

describe('CompletedTaskReportComponent', () => {
  let component: CompletedTaskReportComponent;
  let fixture: ComponentFixture<CompletedTaskReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedTaskReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTaskReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

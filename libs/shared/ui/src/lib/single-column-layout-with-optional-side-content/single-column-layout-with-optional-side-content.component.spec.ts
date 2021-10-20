import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColumnLayoutWithOptionalSideContentComponent } from './single-column-layout-with-optional-side-content.component';

describe('SingleColumnLayoutWithOptionalSideContentComponent', () => {
  let component: SingleColumnLayoutWithOptionalSideContentComponent;
  let fixture: ComponentFixture<SingleColumnLayoutWithOptionalSideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleColumnLayoutWithOptionalSideContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleColumnLayoutWithOptionalSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

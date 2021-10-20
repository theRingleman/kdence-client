import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildIndexComponent } from './child-index.component';

describe('ChildIndexComponent', () => {
  let component: ChildIndexComponent;
  let fixture: ComponentFixture<ChildIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

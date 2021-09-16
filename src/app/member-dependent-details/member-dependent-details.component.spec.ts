import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDependentDetailsComponent } from './member-dependent-details.component';

describe('MemberDependentDetailsComponent', () => {
  let component: MemberDependentDetailsComponent;
  let fixture: ComponentFixture<MemberDependentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDependentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDependentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

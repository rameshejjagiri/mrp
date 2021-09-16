import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditDependentComponent } from './member-edit-dependent.component';

describe('MemberEditDependentComponent', () => {
  let component: MemberEditDependentComponent;
  let fixture: ComponentFixture<MemberEditDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberEditDependentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

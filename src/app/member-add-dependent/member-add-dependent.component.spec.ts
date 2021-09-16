import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddDependentComponent } from './member-add-dependent.component';

describe('MemberAddDependentComponent', () => {
  let component: MemberAddDependentComponent;
  let fixture: ComponentFixture<MemberAddDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAddDependentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

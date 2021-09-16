import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSubmitClaimsComponent } from './member-submit-claims.component';

describe('MemberSubmitClaimsComponent', () => {
  let component: MemberSubmitClaimsComponent;
  let fixture: ComponentFixture<MemberSubmitClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSubmitClaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSubmitClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

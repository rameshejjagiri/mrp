import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberClaimsListComponent } from './member-claims-list.component';

describe('MemberClaimsListComponent', () => {
  let component: MemberClaimsListComponent;
  let fixture: ComponentFixture<MemberClaimsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberClaimsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberClaimsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

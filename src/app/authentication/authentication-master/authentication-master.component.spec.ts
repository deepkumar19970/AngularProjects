import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationMasterComponent } from './authentication-master.component';

describe('AuthenticationMasterComponent', () => {
  let component: AuthenticationMasterComponent;
  let fixture: ComponentFixture<AuthenticationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

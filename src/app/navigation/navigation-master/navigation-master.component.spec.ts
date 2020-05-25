import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMasterComponent } from './navigation-master.component';

describe('NavigationMasterComponent', () => {
  let component: NavigationMasterComponent;
  let fixture: ComponentFixture<NavigationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

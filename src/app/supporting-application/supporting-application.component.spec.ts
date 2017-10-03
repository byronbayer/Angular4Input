import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingApplicationComponent } from './supporting-application.component';

describe('SupportingApplicationComponent', () => {
  let component: SupportingApplicationComponent;
  let fixture: ComponentFixture<SupportingApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportingApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

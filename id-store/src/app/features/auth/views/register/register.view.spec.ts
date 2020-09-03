import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterView } from './register.view';

describe('RegisterView', () => {
  let component: RegisterView;
  let fixture: ComponentFixture<RegisterView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchView } from './search.view';

describe('SearchView', () => {
  let component: SearchView;
  let fixture: ComponentFixture<SearchView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

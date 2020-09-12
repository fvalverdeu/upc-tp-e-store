import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateImgComponent } from './product-update-img.component';

describe('ProductUpdateImgComponent', () => {
  let component: ProductUpdateImgComponent;
  let fixture: ComponentFixture<ProductUpdateImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUpdateImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

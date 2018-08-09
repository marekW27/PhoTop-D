import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdjComponent } from './zdj.component';

describe('ZdjComponent', () => {
  let component: ZdjComponent;
  let fixture: ComponentFixture<ZdjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

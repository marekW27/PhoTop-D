import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmianaHComponent } from './zmiana-h.component';

describe('ZmianaHComponent', () => {
  let component: ZmianaHComponent;
  let fixture: ComponentFixture<ZmianaHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZmianaHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmianaHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

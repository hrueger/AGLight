import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsComponent } from './heads.component';

describe('HeadsComponent', () => {
  let component: HeadsComponent;
  let fixture: ComponentFixture<HeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

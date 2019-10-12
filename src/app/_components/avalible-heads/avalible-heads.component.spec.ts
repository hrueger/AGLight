import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalibleHeadsComponent } from './avalible-heads.component';

describe('AvalibleHeadsComponent', () => {
  let component: AvalibleHeadsComponent;
  let fixture: ComponentFixture<AvalibleHeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalibleHeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalibleHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

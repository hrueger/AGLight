import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureShowComponent } from './configure-show.component';

describe('ConfigureShowComponent', () => {
  let component: ConfigureShowComponent;
  let fixture: ComponentFixture<ConfigureShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

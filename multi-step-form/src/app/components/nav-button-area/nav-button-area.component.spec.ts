import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonAreaComponent } from './nav-button-area.component';

describe('NavButtonAreaComponent', () => {
  let component: NavButtonAreaComponent;
  let fixture: ComponentFixture<NavButtonAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavButtonAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavButtonAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

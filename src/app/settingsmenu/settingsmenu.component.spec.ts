import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsmenuComponent } from './settingsmenu.component';

describe('SettingsmenuComponent', () => {
  let component: SettingsmenuComponent;
  let fixture: ComponentFixture<SettingsmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

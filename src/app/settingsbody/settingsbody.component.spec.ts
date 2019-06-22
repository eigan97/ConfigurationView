import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsbodyComponent } from './settingsbody.component';

describe('SettingsbodyComponent', () => {
  let component: SettingsbodyComponent;
  let fixture: ComponentFixture<SettingsbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

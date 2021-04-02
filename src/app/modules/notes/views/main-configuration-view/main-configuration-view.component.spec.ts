import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConfigurationViewComponent } from './main-configuration-view.component';

describe('MainConfigurationViewComponent', () => {
  let component: MainConfigurationViewComponent;
  let fixture: ComponentFixture<MainConfigurationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainConfigurationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConfigurationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

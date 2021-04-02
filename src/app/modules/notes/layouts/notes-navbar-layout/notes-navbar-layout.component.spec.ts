import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesNavbarLayoutComponent } from './notes-navbar-layout.component';

describe('NotesNavbarLayoutComponent', () => {
  let component: NotesNavbarLayoutComponent;
  let fixture: ComponentFixture<NotesNavbarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesNavbarLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesNavbarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

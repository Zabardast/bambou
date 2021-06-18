import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanneauAdministrationComponent } from './panneau-administration.component';

describe('PanneauAdministrationComponent', () => {
  let component: PanneauAdministrationComponent;
  let fixture: ComponentFixture<PanneauAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanneauAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanneauAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

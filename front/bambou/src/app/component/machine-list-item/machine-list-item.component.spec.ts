import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineListItemComponent } from './machine-list-item.component';

describe('MachineListItemComponent', () => {
  let component: MachineListItemComponent;
  let fixture: ComponentFixture<MachineListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

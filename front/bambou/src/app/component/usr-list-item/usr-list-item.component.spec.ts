import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListItemComponent } from './usr-list-item.component';

describe('UsrListItemComponent', () => {
  let component: UsrListItemComponent;
  let fixture: ComponentFixture<UsrListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGammeListItemComponent } from './add-gamme-list-item.component';

describe('AddGammeListItemComponent', () => {
  let component: AddGammeListItemComponent;
  let fixture: ComponentFixture<AddGammeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGammeListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGammeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

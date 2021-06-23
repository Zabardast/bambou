import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammeListItemComponent } from './gamme-list-item.component';

describe('GammeListItemComponent', () => {
  let component: GammeListItemComponent;
  let fixture: ComponentFixture<GammeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GammeListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GammeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

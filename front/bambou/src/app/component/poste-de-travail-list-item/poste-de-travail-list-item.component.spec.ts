import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteDeTravailListItemComponent } from './poste-de-travail-list-item.component';

describe('PosteDeTravailListItemComponent', () => {
  let component: PosteDeTravailListItemComponent;
  let fixture: ComponentFixture<PosteDeTravailListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteDeTravailListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteDeTravailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

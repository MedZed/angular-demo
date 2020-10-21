import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteTileComponent } from './new-note-tile.component';

describe('NewNoteTileComponent', () => {
  let component: NewNoteTileComponent;
  let fixture: ComponentFixture<NewNoteTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNoteTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNoteTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesSortComponentComponent } from './heroes-sort-component.component';

describe('HeroesSortComponentComponent', () => {
  let component: HeroesSortComponentComponent;
  let fixture: ComponentFixture<HeroesSortComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesSortComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesSortComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

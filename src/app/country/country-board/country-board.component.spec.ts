import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBoardComponent } from './country-board.component';

describe('CountryBoardComponent', () => {
  let component: CountryBoardComponent;
  let fixture: ComponentFixture<CountryBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

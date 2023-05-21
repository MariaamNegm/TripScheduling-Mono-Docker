import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtripbynameComponent } from './searchtripbyname.component';

describe('SearchtripbynameComponent', () => {
  let component: SearchtripbynameComponent;
  let fixture: ComponentFixture<SearchtripbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtripbynameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchtripbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

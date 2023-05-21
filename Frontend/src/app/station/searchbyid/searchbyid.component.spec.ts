import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyidComponent } from './searchbyid.component';

describe('SearchbyidComponent', () => {
  let component: SearchbyidComponent;
  let fixture: ComponentFixture<SearchbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

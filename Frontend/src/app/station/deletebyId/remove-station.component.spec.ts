import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStationComponent } from './remove-station.component';

describe('RemoveStationComponent', () => {
  let component: RemoveStationComponent;
  let fixture: ComponentFixture<RemoveStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

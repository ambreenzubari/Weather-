import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeatherWidgetComponent } from './main-weather-widget.component';

describe('MainWeatherWidgetComponent', () => {
  let component: MainWeatherWidgetComponent;
  let fixture: ComponentFixture<MainWeatherWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWeatherWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuideComponent } from './tour-guide.component';

describe('TourGuideComponent', () => {
  let component: TourGuideComponent;
  let fixture: ComponentFixture<TourGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

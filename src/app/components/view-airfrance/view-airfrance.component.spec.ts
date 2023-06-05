import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAirFranceComponent } from './view-airfrance.component';


describe('ViewDecollagesComponent', () => {
  let component: ViewAirFranceComponent;
  let fixture: ComponentFixture<ViewAirFranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAirFranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAirFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

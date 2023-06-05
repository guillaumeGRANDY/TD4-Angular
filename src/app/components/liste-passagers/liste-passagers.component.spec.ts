import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePassagersComponent } from './liste-passagers.component';

describe('ListePassagersComponent', () => {
  let component: ListePassagersComponent;
  let fixture: ComponentFixture<ListePassagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePassagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePassagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

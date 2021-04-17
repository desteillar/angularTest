import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProcessComponentComponent } from './data-process-component.component';

describe('DataProcessComponentComponent', () => {
  let component: DataProcessComponentComponent;
  let fixture: ComponentFixture<DataProcessComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProcessComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProcessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

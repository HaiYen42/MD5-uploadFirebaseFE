import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadComponent } from './dad.component';

describe('DadComponent', () => {
  let component: DadComponent;
  let fixture: ComponentFixture<DadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadComponent]
    });
    fixture = TestBed.createComponent(DadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

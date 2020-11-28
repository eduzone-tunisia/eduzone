/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestStarComponent } from './test-star.component';

describe('TestStarComponent', () => {
  let component: TestStarComponent;
  let fixture: ComponentFixture<TestStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

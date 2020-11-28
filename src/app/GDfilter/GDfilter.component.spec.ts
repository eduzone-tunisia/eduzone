/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GDfilterComponent } from './GDfilter.component';

describe('GDfilterComponent', () => {
  let component: GDfilterComponent;
  let fixture: ComponentFixture<GDfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GDfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GDfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

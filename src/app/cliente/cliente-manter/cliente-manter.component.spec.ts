import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteManterComponent } from './cliente-manter.component';

describe('ClienteManterComponent', () => {
  let component: ClienteManterComponent;
  let fixture: ComponentFixture<ClienteManterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteManterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

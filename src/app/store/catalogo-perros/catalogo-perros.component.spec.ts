import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPerrosComponent } from './catalogo-perros.component';

describe('CatalogoPerrosComponent', () => {
  let component: CatalogoPerrosComponent;
  let fixture: ComponentFixture<CatalogoPerrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoPerrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

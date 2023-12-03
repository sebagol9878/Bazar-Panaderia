import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpezarAComprarPage } from './empezar-a-comprar.page';

describe('EmpezarAComprarPage', () => {
  let component: EmpezarAComprarPage;
  let fixture: ComponentFixture<EmpezarAComprarPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(EmpezarAComprarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

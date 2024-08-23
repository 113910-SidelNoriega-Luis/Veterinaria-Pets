import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordeRojoComponent } from './borde-rojo.component';

describe('BordeRojoComponent', () => {
  let component: BordeRojoComponent;
  let fixture: ComponentFixture<BordeRojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BordeRojoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BordeRojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

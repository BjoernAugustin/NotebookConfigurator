import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbvisualComponent } from './nbvisual.component';

describe('NbvisualComponent', () => {
  let component: NbvisualComponent;
  let fixture: ComponentFixture<NbvisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbvisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbvisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

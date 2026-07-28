import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyComponent } from './lobby';

describe('LobbyComponent', () => {
  let component: LobbyComponent;
  let fixture: ComponentFixture<LobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LobbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

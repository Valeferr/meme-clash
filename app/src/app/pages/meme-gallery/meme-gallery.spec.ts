import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeGalleryComponent } from './meme-gallery';

describe('MemeGalleryComponent', () => {
  let component: MemeGalleryComponent;
  let fixture: ComponentFixture<MemeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeGalleryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

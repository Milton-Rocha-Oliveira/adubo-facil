import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaAndSummaryComponent } from './social-media-and-summary.component';

describe('SocialMediaAndSummaryComponent', () => {
  let component: SocialMediaAndSummaryComponent;
  let fixture: ComponentFixture<SocialMediaAndSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaAndSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaAndSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

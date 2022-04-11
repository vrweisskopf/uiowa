import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { BrandingBarComponent } from "./branding-bar.component";

describe("BrandingBarComponent", () => {
  let component: BrandingBarComponent;
  let fixture: ComponentFixture<BrandingBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandingBarComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

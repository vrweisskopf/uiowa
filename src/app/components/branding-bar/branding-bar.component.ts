import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branding-bar',
  templateUrl: './branding-bar.component.html',
  styleUrls: ['./branding-bar.component.scss'],
})
export class BrandingBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  public get siteName(): string {
    return 'Vanessa Weisskopf';
  }

  public intro(): void {
    this.router.navigate(['/']);
  }

  public keyboardIntro(event: KeyboardEvent): void {
    if (event instanceof KeyboardEvent) {
      if (event.key.toLowerCase() === 'enter') {
        this.intro();
      }
    }
  }
}

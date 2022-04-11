import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'workspace';

  @ViewChild(MatSidenav, { static: true })
  sidenav!: MatSidenav;
  
  constructor(    
    private observer: BreakpointObserver
    ) {
    window.addEventListener('beforeunload', function() { 
      sessionStorage.clear(); 
    }); 
    window.addEventListener('beforeunload', function() { 
      localStorage.clear(); 
    });   
  }

  ngOnInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}

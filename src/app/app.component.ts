import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'workspace';

  constructor() {
    window.addEventListener('beforeunload', function() { 
      sessionStorage.clear(); 
    }); 
    window.addEventListener('beforeunload', function() { 
      localStorage.clear(); 
    });   
  }
}

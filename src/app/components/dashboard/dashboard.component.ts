import { Component } from '@angular/core';
import { CardsComponent } from 'src/app/shared/widgets/cards/cards.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards = CardsComponent;
  constructor() { }

  ngOnInit(): void {
  }
}
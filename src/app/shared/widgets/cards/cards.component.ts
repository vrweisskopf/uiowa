import { Component, OnInit } from '@angular/core';
import { employeeDates } from 'src/app/data/cards-content';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public employeeDates = employeeDates;

  ngOnInit(): void {
  }

}

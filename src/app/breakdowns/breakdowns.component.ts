import { Component, OnInit } from '@angular/core';
import { Breakdown } from './breakdown-list/breakdown.model';

@Component({
  selector: 'app-breakdowns',
  templateUrl: './breakdowns.component.html',
  styleUrls: ['./breakdowns.component.sass']
})
export class BreakdownsComponent implements OnInit {
  selectedBreakdown: Breakdown;

  constructor() { }

  ngOnInit() {
  }

}

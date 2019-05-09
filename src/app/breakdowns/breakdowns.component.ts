import { Component, OnInit } from '@angular/core';
import { Breakdown } from './breakdown-list/breakdown.model';
import { BreakdownService } from './breakdown.service';

@Component({
  selector: 'app-breakdowns',
  templateUrl: './breakdowns.component.html',
  styleUrls: ['./breakdowns.component.sass']
})
export class BreakdownsComponent implements OnInit {
  selectedBreakdown: Breakdown;

  constructor(private breakdownService: BreakdownService) { }

  ngOnInit() {
    this.breakdownService.breakdownSelected.subscribe(
      (breakdown: Breakdown) => {
        this.selectedBreakdown = breakdown;
      }
    );
  }
}

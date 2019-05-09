import { Component, OnInit } from '@angular/core';
import { Breakdown } from './breakdown.model';
import { BreakdownService } from '../breakdown.service';

@Component({
  selector: 'app-breakdown-list',
  templateUrl: './breakdown-list.component.html',
  styleUrls: ['./breakdown-list.component.sass']
})
export class BreakdownListComponent implements OnInit {
  breakdowns: Breakdown[];

  constructor(private breakdownService: BreakdownService) { }

  ngOnInit() {
    this.breakdowns = this.breakdownService.getBreakdowns();
  }
}

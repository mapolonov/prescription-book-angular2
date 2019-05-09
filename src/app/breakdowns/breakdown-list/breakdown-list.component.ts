import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Breakdown } from './breakdown.model';
import { BreakdownService } from '../breakdown.service';

@Component({
  selector: 'app-breakdown-list',
  templateUrl: './breakdown-list.component.html',
  styleUrls: ['./breakdown-list.component.sass']
})
export class BreakdownListComponent implements OnInit {

  @Output() breakdownWasSelected = new EventEmitter<Breakdown>();
  breakdowns: Breakdown[];

  constructor(private breakdownService: BreakdownService) { }

  ngOnInit() {
    this.breakdowns = this.breakdownService.getBreakdowns();
  }

  onBreakdownSelected(breakdown: Breakdown) {
    this.breakdownWasSelected.emit(breakdown);
  }

}

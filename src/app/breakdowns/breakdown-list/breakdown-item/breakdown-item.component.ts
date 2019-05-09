import { Component, OnInit, Input } from '@angular/core';
import { Breakdown } from '../breakdown.model';
import { BreakdownService } from '../../breakdown.service';

@Component({
  selector: 'app-breakdown-item',
  templateUrl: './breakdown-item.component.html',
  styleUrls: ['./breakdown-item.component.sass']
})
export class BreakdownItemComponent implements OnInit {
  @Input() breakdown: Breakdown;

  constructor(private breakdownService: BreakdownService) { }

  ngOnInit() {
  }

  onSelected() {
    this.breakdownService.breakdownSelected.emit(this.breakdown);
  }
}

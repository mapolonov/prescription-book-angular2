import { Component, OnInit, Input } from '@angular/core';
import { Breakdown } from '../breakdown-list/breakdown.model';
import { BreakdownService } from '../breakdown.service';
import { OrderListService } from 'src/app/order-list/order-list.service';

@Component({
  selector: 'app-breakdown-detail',
  templateUrl: './breakdown-detail.component.html',
  styleUrls: ['./breakdown-detail.component.sass']
})
export class BreakdownDetailComponent implements OnInit {

  @Input() breakdown: Breakdown;

  constructor(private breakdownService: BreakdownService) { }

  ngOnInit() {
  }

  onAddToOrder() {
    this.breakdownService.onAddActionsToOrderList(this.breakdown.repairActions);
  }

}

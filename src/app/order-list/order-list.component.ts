import { Component, OnInit } from '@angular/core';
import { RepairAction } from '../shared/repair-action.model';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {
  repairActions: RepairAction[];

  constructor(private orderListService: OrderListService) { }

  ngOnInit() {
    this.repairActions = this.orderListService.getOrderList();
    this.orderListService.orderListChanged.subscribe(
      (repairActions: RepairAction[]) => {
        this.repairActions = repairActions;
      }
    );
  }
}

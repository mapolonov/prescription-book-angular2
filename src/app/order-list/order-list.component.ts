import { Component, OnInit } from '@angular/core';
import { RepairAction } from '../shared/repair-action.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {

  repairActions: RepairAction[] = [
    new RepairAction('Checking', 1, 30),
    new RepairAction('Export new mirror', 7, 500)
  ];

  constructor() { }

  ngOnInit() {
  }

  onRepairActionAdded(repairAction: RepairAction) {
    this.repairActions.push(repairAction);
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { RepairAction } from '../shared/repair-action.model';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  orderListChanged = new EventEmitter<RepairAction[]>();

  private repairActions: RepairAction[] = [
    new RepairAction('Checking', 1, 30),
    new RepairAction('Export new mirror', 7, 500)
  ];

  constructor() { }

  getOrderList() {
    return this.repairActions.slice();
  }

  addRepairAction(repairAction: RepairAction) {
    this.repairActions.push(repairAction);
    this.orderListChanged.emit(this.repairActions.slice());
  }
}

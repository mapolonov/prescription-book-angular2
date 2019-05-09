import { Injectable, EventEmitter } from '@angular/core';
import { Breakdown } from './breakdown-list/breakdown.model';
import { RepairAction } from '../shared/repair-action.model';
import { OrderListService } from '../order-list/order-list.service';

@Injectable({
  providedIn: 'root'
})
export class BreakdownService {
  breakdownSelected = new EventEmitter<Breakdown>();

  private breakdowns: Breakdown[]  = [
    new Breakdown('Wheel replacement',
    'Wheel replacement description',
    'https://31b6x2kfq7i4fm1numa66e14-wpengine.netdna-ssl.com/wp-content/uploads/2015/02/article-0-1222036C000005DC-184_634x404.jpg',
    [ new RepairAction('Diagnostic', 1, 1), new RepairAction('Wheel replace', 10, 100) ]),

    new Breakdown('Battery replacement', 'Battery replacement description',
    'https://di-uploads-pod1.dealerinspire.com/lancastertoyota/uploads/2017/01/26362435586_11e006d8da_z.jpg',
    [ new RepairAction('Diagnostic', 1, 1), new RepairAction('Battery replace', 5, 30) ]),

    new Breakdown('The car does not open', 'The car does not open description',
    'https://www.lockservice.pro/img/mashina-ne-otkryvaetsya-s-breloka-signalizacii.jpg',
    [ new RepairAction('Diagnostic', 1, 1), new RepairAction('Electronic replace', 120, 2000) ])
  ];

  constructor(private orderListService: OrderListService) { }

  getBreakdowns() {
    return this.breakdowns.slice();
  }

  onAddActionsToOrderList(repairActions: RepairAction[]) {
    this.orderListService.addRepairActions(repairActions);
  }
}

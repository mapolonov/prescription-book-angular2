import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { RepairAction } from 'src/app/shared/repair-action.model';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.sass']
})
export class OrderEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('timeInput') timeInputRef: ElementRef;
  @ViewChild('costInput') costInputRef: ElementRef;

  @Output() repairActionAdded = new EventEmitter<RepairAction>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const time = this.timeInputRef.nativeElement.value;
    const cost = this.costInputRef.nativeElement.value;

    const newRepairAction = new RepairAction(name, time, cost);

    this.repairActionAdded.emit(newRepairAction);
  }

}

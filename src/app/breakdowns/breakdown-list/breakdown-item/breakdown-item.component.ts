import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Breakdown } from '../breakdown.model';

@Component({
  selector: 'app-breakdown-item',
  templateUrl: './breakdown-item.component.html',
  styleUrls: ['./breakdown-item.component.sass']
})
export class BreakdownItemComponent implements OnInit {
  @Input() breakdown: Breakdown;
  @Output() breakdownSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.breakdownSelected.emit();
  }
}

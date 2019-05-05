import { Component, OnInit, Input } from '@angular/core';
import { Breakdown } from '../breakdown-list/breakdown.model';

@Component({
  selector: 'app-breakdown-detail',
  templateUrl: './breakdown-detail.component.html',
  styleUrls: ['./breakdown-detail.component.sass']
})
export class BreakdownDetailComponent implements OnInit {

  @Input() breakdown: Breakdown;

  constructor() { }

  ngOnInit() {
  }

}

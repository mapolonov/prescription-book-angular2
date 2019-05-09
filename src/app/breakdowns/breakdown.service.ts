import { Injectable } from '@angular/core';
import { Breakdown } from './breakdown-list/breakdown.model';

@Injectable({
  providedIn: 'root'
})
export class BreakdownService {
  private breakdowns: Breakdown[]  = [
    new Breakdown('Wheel replacement', 'Wheel replacement description',
    'https://31b6x2kfq7i4fm1numa66e14-wpengine.netdna-ssl.com/wp-content/uploads/2015/02/article-0-1222036C000005DC-184_634x404.jpg'),
    new Breakdown('Battery replacement', 'Battery replacement description',
    'https://di-uploads-pod1.dealerinspire.com/lancastertoyota/uploads/2017/01/26362435586_11e006d8da_z.jpg'),
    new Breakdown('The car does not open', 'The car does not open description',
    'https://www.lockservice.pro/img/mashina-ne-otkryvaetsya-s-breloka-signalizacii.jpg')
  ];

  constructor() { }

  getBreakdowns() {
    return this.breakdowns;
  }
}

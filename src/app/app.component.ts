import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Breakdown-book';
  name = 'Max';
  loadedFeature = 'breakdowns';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

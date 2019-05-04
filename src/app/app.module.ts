import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreakdownsComponent } from './breakdowns/breakdowns.component';
import { BreakdownListComponent } from './breakdowns/breakdown-list/breakdown-list.component';
import { BreakdownDetailComponent } from './breakdowns/breakdown-detail/breakdown-detail.component';
import { BreakdownItemComponent } from './breakdowns/breakdown-list/breakdown-item/breakdown-item.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-list/order-edit/order-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreakdownsComponent,
    BreakdownListComponent,
    BreakdownDetailComponent,
    BreakdownItemComponent,
    OrderListComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

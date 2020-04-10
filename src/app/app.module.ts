import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { SavingsComponent } from './components/accounts/savings/savings.component';
import { LoanComponent } from './components/accounts/loan/loan.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { BillsAndRechargesComponent } from './components/bills-and-recharges/bills-and-recharges.component';
import { OffersComponent } from './components/offers/offers.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountService } from './services/accountService';
import { AccountDetailsComponent } from './components/accounts/account-details/account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SavingsComponent,
    LoanComponent,
    FundTransferComponent,
    BillsAndRechargesComponent,
    OffersComponent,
    AccountsComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

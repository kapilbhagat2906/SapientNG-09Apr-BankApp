import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { SavingsComponent } from './components/accounts/savings/savings.component';
import { LoanComponent } from './components/accounts/loan/loan.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { BillsAndRechargesComponent } from './components/bills-and-recharges/bills-and-recharges.component';
import { OffersComponent } from './components/offers/offers.component';
import { AccountDetailsComponent } from './components/accounts/account-details/account-details.component';


const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'accountDetails/:type',
    component: AccountDetailsComponent
  },
  {
    path: 'funds',
    component: FundTransferComponent
  },
  {
    path: 'bill',
    component: BillsAndRechargesComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

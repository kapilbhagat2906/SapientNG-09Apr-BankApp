import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/accountService';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accountSummaryList: any;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.getAccountDetails()
      .subscribe(data => {
        this.accountSummaryList = data;
      });
  }

}

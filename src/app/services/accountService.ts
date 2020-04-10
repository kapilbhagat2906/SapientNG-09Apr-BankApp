import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {
    constructor(
        private http: HttpClient
    ) { }

    getAccountDetails (): Observable<any> {
        return this.http.get('/api/accountSummary');
    }
}

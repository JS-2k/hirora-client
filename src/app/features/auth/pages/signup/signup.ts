import { Component } from '@angular/core';

type AccountType = 'candidate' | 'hiring';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup.html',
  styleUrl: '../auth.css'
})
export class SignupPage {
  protected accountType: AccountType = 'candidate';

  protected setAccountType(type: AccountType): void {
    this.accountType = type;
  }
}

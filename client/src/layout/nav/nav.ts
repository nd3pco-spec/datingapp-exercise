import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink, RouterLinkActive],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {
  private router = inject(Router);
  protected accountService = inject(AccountService);
  protected creds: any = {};

  login() {
    this.accountService.login(this.creds)
    .subscribe({
      next: result =>  {
        this.creds = {};
        this.router.navigateByUrl('/members');
      },
      error: error => alert(error.message)
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}

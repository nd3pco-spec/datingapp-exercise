import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiError } from '../../../types/error';

@Component({
  imports: [],
  selector: 'app-server-error',
  styleUrl: './server-error.css',
  templateUrl: './server-error.html',
})
export class ServerError {
  private router = inject(Router);
  protected error: ApiError;
  protected showDetails = false;

  constructor() {
    const navigation = this.router.currentNavigation();
    this.error = navigation?.extras?.state?.['error'];
  }

  detailsToggle() {
    this.showDetails = !this.showDetails;
  }
}

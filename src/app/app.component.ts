import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Overlay Loading Components</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <app-table-basic-example
          [overlayLoading]="fetchingData$"
        ></app-table-basic-example>
      </mat-card-content>
    </mat-card>
  `
})
export class AppComponent {
  displayOverlay = [true, false];
  fetchingData$: Observable<boolean> = interval(2000).pipe(
    map(i => this.displayOverlay[i])
  );
}

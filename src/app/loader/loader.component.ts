import {
  Component,
  Input,
  ViewContainerRef,
  OnInit,
  Inject
} from '@angular/core';

import { LoaderData, LOADER_DATA } from './loader.config';

@Component({
  selector: 'app-loader',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          {{ data.title }}
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-progress-bar *ngIf="isProgressBar" mode="query"></mat-progress-bar>
        <mat-progress-spinner
          *ngIf="isSpinner"
          mode="indeterminate"
        ></mat-progress-spinner>
      </mat-card-content>
    </mat-card>
  `
})
export class LoaderComponent {
  @Input() templateRef: ViewContainerRef;

  constructor(@Inject(LOADER_DATA) public data: any) {}

  get isSpinner(): boolean {
    return this.data.loaderType === 'Spinner';
  }

  get isProgressBar(): boolean {
    return this.data.loaderType === 'ProgressBar';
  }
}

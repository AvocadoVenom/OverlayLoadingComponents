import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule,
  MatTableModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { LoaderComponent } from './loader/loader.component';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';
import { OverlayLoadingDirective } from './overlay-loading.directive';
import { LOADER_DATA, LoaderData } from './loader/loader.config';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    TableBasicExampleComponent,
    OverlayLoadingDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatTableModule
  ],
  providers: [
    {
      provide: LOADER_DATA,
      useValue: new LoaderData('Reloading data...', 'Spinner')
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent]
})
export class AppModule {}

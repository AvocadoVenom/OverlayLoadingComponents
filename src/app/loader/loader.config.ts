import { InjectionToken } from '@angular/core';

export class LoaderData {
  title: string;
  loaderType: LoaderType;
}

export type LoaderType = 'Spinner' | 'ProgressBar';

export const LOADER_DATA = new InjectionToken<LoaderData>('LOADER_DATA');

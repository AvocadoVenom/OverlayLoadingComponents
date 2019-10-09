import { InjectionToken } from '@angular/core';

export class LoaderData {
  constructor(public title: string, public loaderType: LoaderType) {}
}

export type LoaderType = 'Spinner' | 'ProgressBar';

export const LOADER_DATA = new InjectionToken<string>('LOADER_DATA');

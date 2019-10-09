import { Directive, ElementRef, OnInit, Input, Injector } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { DynamicOverlay } from './dynamic-overlay';
import { LoaderComponent } from './loader/loader.component';
import { LoaderData } from './loader/loader.config';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[overlayLoading]'
})
export class OverlayLoadingDirective implements OnInit {
  @Input('overlayLoading') toggler: Observable<boolean>;
  @Input() loaderData: LoaderData;

  private overlayRef: OverlayRef;

  constructor(
    private host: ElementRef,
    private dynamicOverlay: DynamicOverlay,
    private parentInjector: Injector
  ) {}

  ngOnInit() {
    this.overlayRef = this.dynamicOverlay.createWithDefaultConfig(
      this.host.nativeElement
    );

    this.toggler.subscribe(show => {
      if (show) {
        const injector = this.getInjector(this.loaderData, this.parentInjector);
        const loaderPortal = new ComponentPortal(
          LoaderComponent,
          null,
          injector
        );

        this.overlayRef.attach(loaderPortal);
      } else {
        this.overlayRef.detach();
      }
    });
  }

  getInjector(data: LoaderData, parentInjector: Injector): PortalInjector {
    const tokens = new WeakMap();

    tokens.set(LoaderData, data);

    return new PortalInjector(parentInjector, tokens);
  }
}

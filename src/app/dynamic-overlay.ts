import {
    Overlay,
    OverlayKeyboardDispatcher,
    OverlayPositionBuilder,
    ScrollStrategyOptions,
    OverlayRef
} from '@angular/cdk/overlay';
import {
    ComponentFactoryResolver,
    Inject,
    Injector,
    NgZone,
    Renderer2,
    RendererFactory2
} from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';

import { DynamicOverlayContainer } from './dynamic-overlay-container';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DynamicOverlay extends Overlay {
    private renderer: Renderer2;

    private readonly dynamicOverlayContainer: DynamicOverlayContainer;

    constructor(
        scrollStrategies: ScrollStrategyOptions,
        overlayContainer: DynamicOverlayContainer,
        componentFactoryResolver: ComponentFactoryResolver,
        positionBuilder: OverlayPositionBuilder,
        keyboardDispatcher: OverlayKeyboardDispatcher,
        injector: Injector,
        ngZone: NgZone,
        @Inject(DOCUMENT) document: any,
        directionality: Directionality,
        rendererFactory: RendererFactory2
    ) {
        super(
            scrollStrategies,
            overlayContainer,
            componentFactoryResolver,
            positionBuilder,
            keyboardDispatcher,
            injector,
            ngZone,
            document,
            directionality
        );
        this.renderer = rendererFactory.createRenderer(null, null);

        this.dynamicOverlayContainer = overlayContainer;
    }

    private setContainerElement(containerElement: HTMLElement): void {
        this.renderer.setStyle(containerElement, 'transform', 'translateZ(0)');
        this.dynamicOverlayContainer.setContainerElement(containerElement);
    }

    public createWithDefaultConfig(containerElement: HTMLElement): OverlayRef {
        this.setContainerElement(containerElement);
        return super.create({
            positionStrategy: this.position()
                .global()
                .centerHorizontally()
                .centerVertically(),
            hasBackdrop: true
        });
    }
}

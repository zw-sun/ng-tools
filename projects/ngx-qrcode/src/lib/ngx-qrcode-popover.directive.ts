import { NgxQrCodePopoverDirection, NgxQrCodePopoverDirections, NgxQrCodeOptions } from './ngx-qrcode.model';
import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { NgxQrCodeService } from './ngx-qrcode.service';
const STYLE = 'style';
const DIV = 'div';
@Directive({ selector: '[ngx-qrcode-popover]' })
export class NgxQrCodePopoverDirective implements OnInit, OnDestroy {
    @Input() qrCodeOptions: NgxQrCodeOptions = {};
    @Input() qrData: any;
    @Input() direction: NgxQrCodePopoverDirections = NgxQrCodePopoverDirection.TOP;
    @Output() onError = new EventEmitter<Error>();
    @Output() onSuccess = new EventEmitter<HTMLCanvasElement>();
    popoverContainer = null;
    constructor(private eleRef: ElementRef, private render2: Renderer2, private ngxQrCodeService: NgxQrCodeService) { }
    ngOnInit() {
        const nativeEle = this.eleRef.nativeElement;
        this.render2.listen(nativeEle, 'mouseenter', () => {
            this.ngxQrCodeService.toCanvas(this.qrData, this.qrCodeOptions).then((canvas: HTMLCanvasElement) => {
                this.setupPopover(nativeEle, canvas);
                this.onSuccess.emit(canvas);
            }).catch((err) => {
                console.error(err);
                this.onError.emit(err);
            });
        });
        this.render2.listen(nativeEle, 'mouseleave', () => {
            this.removePopover();
        });
    }

    setupPopover(nativeEle: Element, canvas: HTMLCanvasElement) {
        this.popoverContainer = this.render2.createElement(DIV);
        const arrow = this.render2.createElement(DIV);
        this.render2.setAttribute(arrow, STYLE, this.getArrowStyle(this.direction));
        this.render2.appendChild(this.popoverContainer, canvas);
        this.render2.appendChild(this.popoverContainer, arrow);
        const size = canvas.width;
        this.render2.setAttribute(this.popoverContainer, STYLE, this.getContainerStyle(nativeEle, this.direction, size));
        this.render2.appendChild(document.body, this.popoverContainer);
    }

    removePopover() {
        if (this.popoverContainer) {
            this.render2.removeChild(document.body, this.popoverContainer);
            this.popoverContainer = null;
        }
    }


    getArrowStyle(direction: NgxQrCodePopoverDirections) {
        const common = 'position: absolute;border: 5px solid transparent;';
        switch (direction) {
            case NgxQrCodePopoverDirection.TOP:
            case NgxQrCodePopoverDirection.BOTTOM:
                return `${common}${direction}: 100%;left: calc(50% - 5px);border-${direction}-color: black;`;
            case NgxQrCodePopoverDirection.LEFT:
            case NgxQrCodePopoverDirection.RIGHT:
                return `${common}${direction}: 100%;top: calc(50% - 5px);border-${direction}-color: black;`;
        }
    }

    getContainerStyle(nativeEle: Element, direction: NgxQrCodePopoverDirections, size: number) {
        size = size + 10;
        const commonStyle = 'position: absolute;padding: 4px 4px 0px;border: 1px solid rgba(0,0,0,.3);background-color: white;z-index: 999;border-radius:5px;';
        const position = nativeEle.getBoundingClientRect();
        switch (direction) {
            case NgxQrCodePopoverDirection.TOP:
                return `${commonStyle}top:${position.top - size - 5}px;left:${position.left + position.width / 2 - size / 2}px;`;
            case NgxQrCodePopoverDirection.BOTTOM:
                return `${commonStyle}top:${position.top + position.height + 5}px;left:${position.left + position.width / 2 - size / 2}px;`;
            case NgxQrCodePopoverDirection.LEFT:
                return `${commonStyle}top:${position.top + position.height / 2 - size / 2}px;left:${position.left - size - 5}px;`;
            case NgxQrCodePopoverDirection.RIGHT:
                return `${commonStyle}top:${position.top + position.height / 2 - size / 2}px;left:${position.left + position.width + 5}px;`;
        }
    }

    ngOnDestroy() {
        this.removePopover();
    }
}
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgxQrCodeGenerateMethod, NgxQrCodeOutputType, NgxQrCodeOutputTypes, QRCodeErrorCorrectionLevel } from './ngx-qrcode.model';
import { NgxQrCodeService } from './ngx-qrcode.service';
@Component({
  selector: 'ngx-qrcode',
  template: ``,
})
export class NgxQrCodeComponent implements OnChanges {
  @Input() version?: number;
  @Input() errorCorrectionLevel?: QRCodeErrorCorrectionLevel;
  @Input() toSJISFunc?: (codePoint: string) => number;
  @Input() margin?: number;
  @Input() scale?: number;
  @Input() width?: number;
  @Input() colorDark?: string;
  @Input() colorLight?: string;
  @Input() dataUrlType?: string;
  @Input() rendererQuality?: number;
  @Input() qrData: any;
  @Input() outputType: NgxQrCodeOutputTypes = NgxQrCodeOutputType.CANVAS;
  @Output() onError = new EventEmitter<Error>();
  @Output() onSuccess = new EventEmitter<string | HTMLImageElement | HTMLCanvasElement>();
  qrCodeOptions: any;
  constructor(private eleRef: ElementRef, private ngxQrCodeService: NgxQrCodeService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.setOptions();
      this.drowQrCode();
    }
  }

  setOptions() {
    this.qrCodeOptions = {
      version: this.version,
      errorCorrectionLevel: this.errorCorrectionLevel,
      toSJISFunc: this.toSJISFunc,
      margin: this.margin,
      scale: this.scale,
      width: this.width,
      color: {
        dark: this.colorDark,
        light: this.colorLight,
      }
    };
    if (this.outputType !== NgxQrCodeOutputType.CANVAS) {
      this.qrCodeOptions.type = this.dataUrlType;
      this.qrCodeOptions.rendererOpts = {
        quality: this.rendererQuality
      };
    }
  }

  drowQrCode() {
    const nativeEle: Element = this.eleRef.nativeElement;
    if (nativeEle.childNodes.length > 0) {
      nativeEle.childNodes.forEach((n) => {
        nativeEle.removeChild(n);
      })
    }
    const genMethod = this.outputType === NgxQrCodeOutputType.CANVAS ? NgxQrCodeGenerateMethod.TO_CANVAS : NgxQrCodeGenerateMethod.TO_DATA_URL;
    if (genMethod === NgxQrCodeGenerateMethod.TO_CANVAS) {
      this.ngxQrCodeService.toCanvas(this.qrData, this.qrCodeOptions).then((ele: HTMLCanvasElement) => {
        nativeEle.appendChild(ele);
        this.onSuccess.emit(ele);
      }).catch((err: Error) => {
        console.error(err);
        this.onError.emit(err);
      });
    } else {
      this.ngxQrCodeService.toDataURL(this.qrData, this.qrCodeOptions).then((url) => {
        const img = new Image();
        img.src = url;
        img.alt = this.qrData;
        nativeEle.appendChild(img);
        if (this.outputType === NgxQrCodeOutputType.IMG) {
          this.onSuccess.emit(img);
        } else {
          this.onSuccess.emit(url);
        }
      }).catch((err: Error) => {
        console.error(err);
        this.onError.emit(err);
      });
    }
  }
}

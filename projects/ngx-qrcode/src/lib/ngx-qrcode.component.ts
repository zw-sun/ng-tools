import { Component, ElementRef, Input } from '@angular/core';
import QrCode from 'qrcode';

@Component({
  selector: 'ngx-qrcode',
  template: ``,
})
export class NgxQrcodeComponent {
  @Input() options = {};
  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
    this.renderQrcode();
  }
  renderQrcode() {
    const canvas = document.createElement('canvas');
    QrCode.toCanvas(canvas, 'sample text', (error: any) => {
      if (error) {
        console.error(error)
      } else {
        console.log('success!');
        this.eleRef.nativeElement.appendChild(canvas);
      }
    });
  }
}

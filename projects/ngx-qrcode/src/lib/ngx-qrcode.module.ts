import { NgModule } from '@angular/core';
import { NgxQrCodePopoverDirective } from './ngx-qrcode-popover.directive';
import { NgxQrCodeComponent } from './ngx-qrcode.component';
import { NgxQrCodeService } from './ngx-qrcode.service';

@NgModule({
  declarations: [NgxQrCodeComponent, NgxQrCodePopoverDirective],
  providers: [NgxQrCodeService],
  exports: [NgxQrCodeComponent, NgxQrCodePopoverDirective]
})
export class NgxQrcodeModule { }

import { Injectable } from '@angular/core';
import * as QrCode from 'qrcode';
import { NgxQrCodeOptions, NgxQrCodeToDataURLOptions } from './ngx-qrcode.model';

@Injectable()
export class NgxQrCodeService {
    constructor() { }
    toCanvas(qrData: any, qrOptions: NgxQrCodeOptions, element?: any): Promise<HTMLCanvasElement> {
        if (element) {
            return QrCode.toCanvas(element, qrData, qrOptions);
        } else {
            return QrCode.toCanvas(qrData, qrOptions);
        }
    }
    toDataURL(qrData: any, qrOptions: NgxQrCodeToDataURLOptions, element?: any): Promise<string> {
        if (element) {
            return QrCode.toDataURL(element, qrData, qrOptions);
        } else {
            return QrCode.toDataURL(qrData, qrOptions);
        }
    }
}
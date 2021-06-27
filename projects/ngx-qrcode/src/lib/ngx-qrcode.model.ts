export type QRCodeErrorCorrectionLevel = 'low' | 'medium' | 'quartile' | 'high' | 'L' | 'M' | 'Q' | 'H';
export interface NgxQrCodeOptions {
    version?: number;
    errorCorrectionLevel?: QRCodeErrorCorrectionLevel;
    toSJISFunc?: (codePoint: string) => number;
    margin?: number;
    scale?: number;
    width?: number;
    color?: {
        dark?: string;
        light?: string;
    };
}

export interface NgxQrCodeToDataURLOptions extends NgxQrCodeOptions {
    type?: 'image/png' | 'image/jpeg' | 'image/webp';
    rendererOpts?: {
        quality?: number;
    };
}

export type NgxQrCodeOutputTypes = 'img' | 'canvas' | 'url';
export enum NgxQrCodeOutputType {
    CANVAS = 'canvas',
    URL = 'url',
    IMG = 'img'
}
export type NgxQrCodeGenerateMethods = NgxQrCodeGenerateMethod.TO_CANVAS | NgxQrCodeGenerateMethod.TO_DATA_URL;
export enum NgxQrCodeGenerateMethod {
    TO_CANVAS,
    TO_DATA_URL,
}

export type NgxQrCodePopoverDirections = NgxQrCodePopoverDirection.TOP | NgxQrCodePopoverDirection.RIGHT | NgxQrCodePopoverDirection.BOTTOM | NgxQrCodePopoverDirection.LEFT;
export enum NgxQrCodePopoverDirection {
    TOP = 'top',
    RIGHT = 'right',
    BOTTOM = 'bottom',
    LEFT = 'left',
}
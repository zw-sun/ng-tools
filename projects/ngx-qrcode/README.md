# NgxQrCode

It is based on [qrcode](https://www.npmjs.com/package/qrcode), you can use NgxQrCodePopoverDirective to show QrCode Popover on element, also you can use NgxQrCodeComponent as qrcode wrapper.

Please see [demo](https://codesandbox.io/s/ngx-qrcode-example-oktcd).

Import:

        import { NgxQrcodeModule } from '@just-so-so/ngx-qrcode';

## NgxQrCodePopoverDirective

        <span ngx-qrcode-popover [qrCodeOptions]="qrCodeOptions" [qrData]="'any text'" [direction]="'left'">

NgxQrCodeOptions

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

| Property        | Description                               |
| --------------- | ----------------------------------------- |
| [qrCodeOptions] | ``` NgxQrCodeOptions ```                  |
| [direction]     | ``` 'top','right','bottom','left' ``` |
| [qrData]        | QR code content data                      |
| (onError)       | ```EventEmitter<Error>```                 |
| (onSuccess)     | ```EventEmitter<HTMLCanvasElement>```     |

## NgxQrCodeComponent

        <ngx-qrcode [qrData]="'any text'"></ngx-qrcode>

| Property               | Description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| [version]              | same with qrcode [version]                                                          |
| [errorCorrectionLevel] | same with qrcode [errorCorrectionLevel]                                             |
| [toSJISFunc]           | same with qrcode [toSJISFunc]                                                       |
| [margin]               | same with qrcode [margin]                                                           |
| [scale]                | same with qrcode [scale]                                                            |
| [width]                | same with qrcode [width]                                                            |
| [colorDark]            | same with qrcode [color.dark]                                                       |
| [colorLight]           | same with qrcode [color.light]                                                      |
| [dataUrlType]          | same with qrcode [type], values are ```'image/png' , 'image/jpeg' , 'image/webp'``` |
| [rendererQuality]      | same with qrcode [rendererOpts.quality]                                             |
| [qrData]               | QR code content data                                                                |
| [outputType]           | ```'img','canvas','url' ```                                                     |
| (onError)              | ```EventEmitter<Error>```                                                           |
| (onSuccess)            | ```EventEmitter<string,HTMLImageElement,HTMLCanvasElement>```                   |

## NgxQrCodeService

| Method      | Description                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------- |
| (toCanvas)  | ```toCanvas(qrData: any, qrOptions: NgxQrCodeOptions, element?: any): Promise<HTMLCanvasElement>``` |
| (toDataURL) | ```toDataURL(qrData: any, qrOptions: NgxQrCodeToDataURLOptions, element?: any): Promise<string>```  |
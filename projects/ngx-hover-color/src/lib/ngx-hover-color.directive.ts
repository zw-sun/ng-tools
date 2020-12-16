import { NGX_HOVER_COLOR_CONFIG } from './ngx-hover-color.config.token';
import { NgxHoverColorConfig } from './ngx-hover-color-config';
import { Directive, ElementRef, HostListener, Inject, Input, Optional } from '@angular/core';

@Directive({
  selector: '[ngx-hover-color]'
})
export class NgxHoverColorDirective {
  @Input('ngx-hover-color') _hoverColor: any;
  @Input('bgColor') _bgColor: any;
  @Input('bgColorOnly') _bgColorOnly: any;

  get hoverColor(): any {
    return this.getColor(this._hoverColor, 'defaultColor');
  }

  get bgColor(): any {
    return this.getColor(this._bgColor, 'defaultBgColor');
  }

  get bgColorOnly(): boolean {
    if (this._bgColorOnly !== undefined) {
      return this._bgColorOnly;
    } else if (this.ngxHoverColorConfig && this.ngxHoverColorConfig.bgColorOnly !== undefined) {
      return this.ngxHoverColorConfig.bgColorOnly;
    }
    return false;
  }
  private originalColor: any;
  private originalBgColor: any;
  constructor(@Optional() @Inject(NGX_HOVER_COLOR_CONFIG) private ngxHoverColorConfig: NgxHoverColorConfig, private elementRef: ElementRef) {
    this.originalColor = this.elementRef.nativeElement.style.color;
    this.originalBgColor = this.elementRef.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseover') onMouseOver() {
    this.assignColor(this.bgColor, this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.assignColor(this.originalBgColor, this.originalColor);
  }

  private assignColor(bgColorIn: any, colorIn: any) {
    if (this.bgColor) {
      this.elementRef.nativeElement.style.backgroundColor = bgColorIn;
    }
    if (this.bgColorOnly) return;
    this.elementRef.nativeElement.style.color = colorIn;
  }

  private getColor(value: any, configValue: 'defaultBgColor' | 'defaultColor') {
    if (value) {
      return value;
    } else if (this.ngxHoverColorConfig && this.ngxHoverColorConfig[configValue]) {
      return this.ngxHoverColorConfig[configValue];
    }
    return '';
  }
}

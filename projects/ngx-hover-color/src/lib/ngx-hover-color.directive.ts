import { NGX_HOVER_COLOR_CONFIG } from './ngx-hover-color.config.token';
import { NgxHoverColorConfig } from './ngx-hover-color-config';
import { Directive, HostListener, Inject, Input, Optional } from '@angular/core';

@Directive({
  selector: '[ngx-hover-color]',
  host: {
    '[style]': 'colorStyle'
  }
})
export class NgxHoverColorDirective {
  @Input('ngx-hover-color') _hoverColor: any;
  @Input('bgColor') _bgColor: any;
  @Input('bgColorOnly') _bgColorOnly: any;
  isHovering: boolean = false;

  get hoverColor() {
    if (this._hoverColor) {
      return this._hoverColor;
    } else if (this.colorConfig && this.colorConfig.defaultColor) {
      return this.colorConfig.defaultColor;
    }
    return '';
  }

  get bgColor() {
    if (this._bgColor) {
      return this._bgColor;
    } else if (this.colorConfig && this.colorConfig.defaultBgColor) {
      return this.colorConfig.defaultBgColor;
    }
    return '';
  }

  get bgColorOnly() {
    if (typeof this._bgColorOnly === 'boolean') {
      return this._bgColorOnly;
    } else if (this.colorConfig && (typeof this.colorConfig.bgColorOnly === 'boolean')) {
      return this.colorConfig.bgColorOnly;
    }
    return false;
  }

  get colorStyle() {
    if (!this.isHovering) return;
    let colorStr = '';
    const bgonly = this.bgColorOnly;
    const hc = this.hoverColor;
    const bgc = this.bgColor;
    if (bgonly) {
      if (!bgc) {
        throw 'No Background Color Provided.'
      } else {
        colorStr = `background-color:${bgc};`
      }
    } else {
      if (!hc) {
        throw 'No Hover Color Provided.'
      }
      colorStr = `color:${hc};background-color:${bgc};`
    }
    return colorStr;
  }
  constructor(
    @Optional() @Inject(NGX_HOVER_COLOR_CONFIG) private colorConfig: NgxHoverColorConfig) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.isHovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering = false;
  }
}

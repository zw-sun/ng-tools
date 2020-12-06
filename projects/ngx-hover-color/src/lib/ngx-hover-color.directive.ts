import { NGX_HOVER_COLOR_CONFIG } from './ngx-hover-color.config.token';
import { NgxHoverColorConfig } from './ngx-hover-color-config';
import { Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';

@Directive({
  selector: '[ngx-hover-color]'
})
export class NgxHoverColorDirective {
  @Input('ngx-hover-color') _hoverColor: any;
  get hoverColor() {
    if (this._hoverColor) {
      return this._hoverColor;
    } else if (this.ngxHoverColorConfig && this.ngxHoverColorConfig.defaultColor) {
      return this.ngxHoverColorConfig.defaultColor;
    }
    return '';
  }
  private originalColor: any;
  constructor(@Inject(NGX_HOVER_COLOR_CONFIG) private ngxHoverColorConfig: NgxHoverColorConfig, private elementRef: ElementRef) {
    this.originalColor = this.elementRef.nativeElement.style.color;
  }

  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.color = this.hoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.color = this.originalColor;
  }
}

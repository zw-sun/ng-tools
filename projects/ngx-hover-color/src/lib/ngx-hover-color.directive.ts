import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ngx-hover-color]'
})
export class NgxHoverColorDirective {
  @Input('ngx-hover-color') hoverColor: any;
  private originalColor = '';
  constructor(private elementRef: ElementRef) {
    this.originalColor = this.elementRef.nativeElement.style.color;
  }

  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.color = this.hoverColor ? this.hoverColor : '#0f69af';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.color = this.originalColor;
  }
}

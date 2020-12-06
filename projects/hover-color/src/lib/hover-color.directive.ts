import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover-color]'
})
export class HoverColorDirective {
  @Input('hover-color') hoverColor = '#0f69af';
  private originalColor = '';
  constructor(private elementRef: ElementRef) {
    this.originalColor = this.elementRef.nativeElement.style.color;
  }

  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.color = this.hoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.color = this.originalColor;
  }
}

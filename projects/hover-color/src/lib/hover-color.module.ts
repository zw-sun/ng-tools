import { NgModule } from '@angular/core';
import { HoverColorDirective } from './hover-color.directive';

@NgModule({
  declarations: [HoverColorDirective],
  exports: [HoverColorDirective]
})
export class HoverColorModule { }

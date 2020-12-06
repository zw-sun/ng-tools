import { NGX_HOVER_COLOR_CONFIG } from './ngx-hover-color.config.token';
import { NgxHoverColorConfig } from './ngx-hover-color-config';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxHoverColorDirective } from './ngx-hover-color.directive';

@NgModule({
  declarations: [NgxHoverColorDirective],
  exports: [NgxHoverColorDirective]
})
export class NgxHoverColorModule {
  static forRoot(ngxHoverColorConfig: NgxHoverColorConfig): ModuleWithProviders<NgxHoverColorModule> {
    return {
      ngModule: NgxHoverColorModule,
      providers: [
        {
          provide: NGX_HOVER_COLOR_CONFIG,
          useValue: ngxHoverColorConfig,
        }
      ]
    }
  }
}

import { TestBed } from '@angular/core/testing';

import { HoverColorService } from './hover-color.service';

describe('HoverColorService', () => {
  let service: HoverColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoverColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

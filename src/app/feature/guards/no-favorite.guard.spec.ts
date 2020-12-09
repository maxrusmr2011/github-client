import { TestBed } from '@angular/core/testing';

import { NoFavoriteGuard } from './no-favorite.guard';

describe('NoFavoriteGuard', () => {
  let guard: NoFavoriteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoFavoriteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

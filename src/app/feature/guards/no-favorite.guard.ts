import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { storeType } from 'src/app/model/store.model';

@Injectable({
  providedIn: 'root'
})
export class NoFavoriteGuard implements CanActivate {
  fav$: Observable<any[]>;

  constructor(private store: Store<storeType>) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select('favorite').pipe(
        switchMap((listFav: any[]) => {
          if (listFav && listFav.length) {
            return of(true);
          }
          return of(false);
        }),
        catchError(() => of(false))
      );
  }

}

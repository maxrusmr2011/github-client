import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { NextComponent } from './components/next/next.component';
import { Next2Component } from './components/next2/next2.component';
import { TopComponent } from './components/top/top.component';
import { NoFavoriteGuard } from './feature/guards/no-favorite.guard';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'next', component: NextComponent },
  { path: 'next2', component: Next2Component },
  { path: 'favorite', component: FavoriteComponent, canActivate: [NoFavoriteGuard]},
  { path: '**', redirectTo: 'top' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

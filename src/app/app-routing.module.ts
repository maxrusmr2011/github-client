import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { TopComponent } from './components/top/top.component';
import { NoFavoriteGuard } from './feature/guards/no-favorite.guard';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'favorite', component: FavoriteComponent, canActivate: [NoFavoriteGuard]},
  { path: '**', redirectTo: 'top' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

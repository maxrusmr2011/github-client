import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './components/top/top.component';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'favorite', loadChildren: () => import('./favorite/favorite.module')
  .then(m => m.FavoriteModule)},
  { path: '**', redirectTo: 'top' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

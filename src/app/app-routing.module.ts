import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '/top', component: TopComponent },
  // { path: '/favorite', component: FavoriteComponent },
  // { path: '*', redirectTo: '/top' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

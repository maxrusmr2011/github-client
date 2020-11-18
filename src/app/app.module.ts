import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { TopComponent } from './components/top/top.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { FeatureModule } from './feature/feature.module';
import { SearchComponent } from './components/search/search.component';
import { TopTableComponent } from './components/top-table/top-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FavoriteComponent,
    ToolbarComponent,
    CardComponent,
    SearchComponent,
    TopTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

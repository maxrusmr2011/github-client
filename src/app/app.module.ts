import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { TopComponent } from './components/top/top.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { FeatureModule } from './feature/feature.module';
import { SearchComponent } from './components/search/search.component';
import { TopTableComponent } from './components/top-table/top-table.component';
import { dataReducer } from './redux/dataReducer';
import { favoriteReducer } from './redux/favoriteReducer';
import { pageReducer } from './redux/pageReducer';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ToolbarComponent,
    CardComponent,
    SearchComponent,
    TopTableComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      dataBase: dataReducer,
      favorite: favoriteReducer,
      page: pageReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

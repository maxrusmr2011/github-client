import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { FunctionService } from './services/function.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoFavoriteGuard } from './guards/no-favorite.guard';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatGridListModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatGridListModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatAutocompleteModule,
  ],
  providers: [
    HttpService,
    FunctionService,
    NoFavoriteGuard,
  ]
})
export class FeatureModule { }

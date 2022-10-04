import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearcherComponent } from './shared/searcher/searcher.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponentComponent } from './components/pokemon-component/pokemon-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriaUiModule } from './shared/material-ui/material-ui.module';


import {NgxPaginationModule} from 'ngx-pagination';
import { InterceptorInterceptor } from './services/interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    HomeComponent,
    PokemonComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MateriaUiModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

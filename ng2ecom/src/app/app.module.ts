import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BasketComponent } from './basket/basket.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FilterFieldPipe } from './pipes/filter-field.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { UpdateDataPipe } from './pipes/update-data.pipe';

import {Router} from '@angular/router';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { KPagination } from './components/kpagination/kpagination';
import { BuyZoneComponent } from './buy-zone/buy-zone.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BooksComponent,
    HomeComponent,
    ContactComponent,
    BasketComponent,
    ProfileComponent,
    LoginComponent,
    FilterFieldPipe,
    OrderByPipe,
    UpdateDataPipe,
    KPagination,
    BuyZoneComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    routing, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lapa1Component } from './lapa1/lapa1.component';
import { Lapa2Component } from './lapa2/lapa2.component';
import { MenuComponent } from './menu/menu.component';
import { CounterService } from './services/counter.service';
import { ShopService } from './services/shop.service';
import { CartComponent } from './shop/cart/cart.component';
import { ProductComponent } from './shop/product/product.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    Lapa1Component,
    Lapa2Component,
    MenuComponent,
    ShopComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CounterService,
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

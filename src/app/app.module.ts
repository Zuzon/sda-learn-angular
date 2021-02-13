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
import { LoginComponent } from './login-component/login.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    Lapa1Component,
    Lapa2Component,
    MenuComponent,
    ShopComponent,
    CartComponent,
    ProductComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CounterService,
    ShopService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

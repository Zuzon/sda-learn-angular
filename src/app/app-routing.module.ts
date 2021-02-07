import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lapa1Component } from './lapa1/lapa1.component';
import { Lapa2Component } from './lapa2/lapa2.component';
import { CartComponent } from './shop/cart/cart.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: Lapa1Component
  },
  {
    path: 'lapa2',
    component: Lapa2Component
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shop/shopping-cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

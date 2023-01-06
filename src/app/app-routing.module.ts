import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from "./pages/cart/cart.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/allProducts' },
  { path: 'allProducts', loadChildren: () => import('./pages/all-products/all-products.module').then(m => m.AllProductsModule) },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

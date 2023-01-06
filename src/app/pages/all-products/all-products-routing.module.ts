import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products.component';
import {FashionComponent} from "../fashion/fashion.component";
import {ElectronicsComponent} from "../electronics/electronics.component";

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'fashion', component: FashionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllProductsRoutingModule { }

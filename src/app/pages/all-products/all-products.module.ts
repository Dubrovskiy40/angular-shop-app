import { NgModule } from '@angular/core';
import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';


@NgModule({
  imports: [AllProductsRoutingModule],
  declarations: [AllProductsComponent],
  exports: [AllProductsComponent]
})
export class AllProductsModule { }

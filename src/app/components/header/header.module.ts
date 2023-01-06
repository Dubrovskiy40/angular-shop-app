import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {HeaderSearchComponent} from "./components/header-search/header-search.component";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HeaderModule {
}

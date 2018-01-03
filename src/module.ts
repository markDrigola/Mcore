import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Post} from "./posts/post";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [Post],
  exports: []
})
export class LibCoreModule { }

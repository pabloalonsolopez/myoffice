import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { IconComponent } from "./icon/icon.component"

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    IconComponent
  ]
})

export class SharedModule { }
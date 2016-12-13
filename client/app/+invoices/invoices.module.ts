import { NgModule } from "@angular/core"

import { SharedModule } from "../shared/shared.module"

import { RoutingModule } from "./invoices.routing"

import { InvoicesComponent } from "./invoices.component"
import { InvoicesListComponent } from "./invoices-list.component"
import { InvoiceNewComponent } from "./invoice-new.component"
import { InvoiceDetailComponent } from "./invoice-detail.component"
import { InvoiceEditComponent } from "./invoice-edit.component"
import { InvoiceFormComponent } from "./invoice-form.component"

import { InvoicesService } from "./invoices.service"

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
    InvoicesComponent,
    InvoicesListComponent,
    InvoiceNewComponent,
    InvoiceDetailComponent,
    InvoiceEditComponent,
    InvoiceFormComponent
  ],
  providers: [
    InvoicesService
  ]
})

export class InvoicesModule {}
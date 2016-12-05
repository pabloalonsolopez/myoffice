import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { InvoicesComponent } from "./invoices.component"
import { InvoicesListComponent } from "./invoices-list.component"
import { InvoiceNewComponent } from "./invoice-new.component"
import { InvoiceDetailComponent } from "./invoice-detail.component"
import { InvoiceEditComponent } from "./invoice-edit.component"

const routes: Routes = [
  {
    path: "",
    component: InvoicesComponent,
    children: [
      {
        path: "",
        component: InvoicesListComponent
      },
      {
        path: "new",
        component: InvoiceNewComponent
      },
      {
        path: ":id",
        component: InvoiceDetailComponent,
        children: [
          {
            path: "edit",
            component: InvoiceEditComponent
          }
        ]
      }
    ]
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
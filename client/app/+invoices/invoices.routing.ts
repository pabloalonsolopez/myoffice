import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { InvoicesComponent } from "./invoices.component"
import { InvoicesListComponent } from "./invoices-list.component"
import { InvoiceDetailComponent } from "./invoice-detail.component"

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
        path: ":id",
        component: InvoiceDetailComponent
      }
    ]
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
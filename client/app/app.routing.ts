import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "invoices",
    loadChildren: "./+invoices/invoices.module#InvoicesModule"
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
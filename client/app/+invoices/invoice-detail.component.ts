import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Params, Router } from "@angular/router"

import { Invoice } from "./invoice.model"
import { InvoicesService } from "./invoices.service"

@Component({
  selector: "mo-invoice-detail",
  templateUrl: "./invoice-detail.component.html"
})

export class InvoiceDetailComponent implements OnInit {

  invoice: Invoice
  error: any

  constructor(private route: ActivatedRoute, private router: Router, private invoicesService: InvoicesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.invoicesService.getInvoice(params["id"]).subscribe(
          invoice => this.invoice = invoice,
          error => this.error = error
        )
      }
    )
  }

  deleteInvoice(): void {
    this.invoicesService.deleteInvoice(this.invoice).subscribe(
      () => this.router.navigate(["/invoices"]),
      error => this.error = error
    )
  }

}
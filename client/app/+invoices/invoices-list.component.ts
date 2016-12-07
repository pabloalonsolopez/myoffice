import { Component, OnInit } from "@angular/core"

import { Invoice } from "./invoice.model"
import { InvoicesService } from "./invoices.service"

@Component({
  selector: "mo-invoices-list",
  templateUrl: "./invoices-list.component.html"
})

export class InvoicesListComponent implements OnInit {

  invoices: Invoice[]
  error: any

  constructor(private invoicesService: InvoicesService) { }

  ngOnInit(): void {
    this.invoicesService.getInvoices()
      .subscribe(
        invoices => this.invoices = invoices,
        error => this.error = error
      )
  }

}
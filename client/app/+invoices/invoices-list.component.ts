import { Component, OnInit } from "@angular/core"

import { Observable } from "rxjs/Observable"

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
        invoices => this.invoices = [{_id: "1", invoice_id: "8712638123", subject: "Campaña electoral", amount: 14.7}, {_id: "2", invoice_id: "8712638124", subject: "Campaña electoral navidad", amount: 140.7}],
        error => this.error = error
      )
  }

}
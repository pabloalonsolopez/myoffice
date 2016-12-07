import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

import { Invoice } from "./invoice.model"
import { InvoicesService } from "./invoices.service"

@Component({
  selector: "mo-invoice-new",
  templateUrl: "./invoice-new.component.html"
})

export class InvoiceNewComponent implements OnInit {

  invoice: Invoice
  error: any

  constructor(private router: Router, private invoicesService: InvoicesService) { }

  ngOnInit(): void {
    this.invoice = new Invoice()
  }

  createInvoice(invoice: Invoice): void {
    delete invoice._id
    this.invoicesService.createInvoice(invoice).subscribe(
      invoice => this.router.navigate(["/invoices", invoice._id]),
      error => this.error = error
    )
  }

}
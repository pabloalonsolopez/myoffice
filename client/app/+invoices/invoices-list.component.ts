import { Component, OnInit } from "@angular/core"

import { ModalService } from "../core/modal/modal.service"
import { InvoicesModule } from "./invoices.module"
import { InvoiceNewComponent } from "./invoice-new.component"

import { Invoice } from "./invoice.model"
import { InvoicesService } from "./invoices.service"

@Component({
  selector: "mo-invoices-list",
  templateUrl: "./invoices-list.component.html"
})

export class InvoicesListComponent implements OnInit {

  invoices: Invoice[]
  error: any

  constructor(private invoicesService: InvoicesService, private modalService: ModalService) {}

  ngOnInit(): void {
    this.invoicesService.getInvoices()
      .subscribe(
        invoices => this.invoices = invoices,
        error => this.error = error
      )
  }

  showCreateInvoiceModal() {
    this.modalService.create(InvoicesModule, InvoiceNewComponent)
  }

}
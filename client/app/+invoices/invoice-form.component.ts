import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Invoice } from './invoice.model'

@Component({
  selector: "mo-invoice-form",
  templateUrl: "./invoice-form.component.html"
})

export class InvoiceFormComponent implements OnInit {
  
  @Input() invoice: Invoice
  @Output() onSubmit: EventEmitter<Invoice> = new EventEmitter<Invoice>()

  invoiceForm: FormGroup
  error: any
  formErrors: any = {
    'invoice_id': '',
    'provider': '',
    'subject': '',
    'amount': '',
    'status': ''
  }
  validationMessages: any = {
    'invoice_id': {
      'required': 'Nº Factura requerido.'
    },
    'provider': {
      'required': 'Proveedor requerido.'
    },
    'subject': {
      'required': 'Concepto requerido.'
    },
    'amount': {
      'required': 'Importe requerido.'
    },
    'status': {
      'required': 'Estado requerido.'
    }
  }
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.invoiceForm = this.formBuilder.group({
      '_id': [this.invoice._id],
      'invoice_id': [this.invoice.invoice_id, Validators.required],
      'provider': [this.invoice.provider, Validators.required],
      'subject': [this.invoice.subject, Validators.required],
      'amount': [this.invoice.amount, Validators.required],
      'status': [this.invoice.status, Validators.required]
    })
    this.invoiceForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    )
  }

  onValueChanged(data?: any): void {
    if (!this.invoiceForm) { return }
    for (const field in this.formErrors) {
      this.formErrors[field] = ''
      const control = this.invoiceForm.get(field)
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field]
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' '
        }
      }
    }
  }

}
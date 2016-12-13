import { Injectable } from "@angular/core"
import { RequestOptions, Headers, Http, Response } from "@angular/http"

import { Observable } from "rxjs/Observable"

import { Invoice } from "./invoice.model"

@Injectable()
export class InvoicesService {

  private invoicesUrl = "api/invoices"
  private options = new RequestOptions({ headers: new Headers({ "Content-Type": "application/json" }) })

  constructor(private http: Http) {}

  getInvoices(): Observable<Invoice[]> {
    return this.http.get(this.invoicesUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }
  
  getInvoice(id: string): Observable<Invoice> {
    return this.http.get(`${this.invoicesUrl}/${id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  createInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post(this.invoicesUrl, JSON.stringify(invoice), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  updateInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.put(`${this.invoicesUrl}/${invoice._id}`, JSON.stringify(invoice), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  deleteInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.delete(`${this.invoicesUrl}/${invoice._id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(response: Response): Observable<any> {
    return response.json() || {}
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error)
  }
  
}
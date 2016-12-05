import { Router, Request, Response, NextFunction } from "express"
import { model } from "mongoose"

const InvoicesRouter: Router = Router()

const Invoice = model("Invoice")

InvoicesRouter.get("/", function(request: Request, response: Response, next: NextFunction) {
  Invoice.find(function(err, invoices) {
    if (err) return next(err)
    response.json(invoices)
  })
})

InvoicesRouter.post("/", function(request: Request, response: Response, next: NextFunction) {
  Invoice.create(request.body, function(err, invoice) {
    if (err) return next(err)
    response.json(invoice)
  })
})

InvoicesRouter.get("/:id", function(request: Request, response: Response, next: NextFunction) {
  Invoice.findById(request.params.id, function(err, invoice) {
    if (err) return next(err)
    response.json(invoice)
  })
})

InvoicesRouter.put("/:id", function(request: Request, response: Response, next: NextFunction) {
  Invoice.findByIdAndUpdate(request.params.id, request.body, { new: true }, function(err, invoice) {
    if (err) return next(err)
    response.json({})
  })
})

InvoicesRouter.delete("/:id", function(request: Request, response: Response, next: NextFunction) {
  Invoice.findByIdAndRemove(request.params.id, function(err, invoice) {
    if (err) return next(err)
    response.json({})
  })
})

export { InvoicesRouter }
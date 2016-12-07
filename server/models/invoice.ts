import { Schema, model } from "mongoose"

const InvoiceSchema = new Schema({
  invoice_id: String,
  provider: String,
  subject: String,
  amount: Number,
  status: String
})

const Invoice = model("Invoice", InvoiceSchema)

export { Invoice }
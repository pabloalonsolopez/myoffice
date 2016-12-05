import { Schema, model } from "mongoose"

const InvoiceSchema = new Schema({
  name: String
})

const Invoice = model("Invoice", InvoiceSchema)

export { Invoice }
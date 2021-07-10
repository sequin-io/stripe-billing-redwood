import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const creditNotes = () => {
  return db.creditNote.findMany()
}

export const CreditNote = {
  customer_balance_transaction_credit_note_customer_balance_transaction_idTocustomer_balance_transaction:
    (_obj, { root }: ResolverArgs<ReturnType<typeof creditNote>>) =>
      db.creditNote
        .findUnique({ where: { id: root.id } })
        .customer_balance_transaction_credit_note_customer_balance_transaction_idTocustomer_balance_transaction(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof creditNote>>) =>
    db.creditNote.findUnique({ where: { id: root.id } }).customer(),
  discount: (_obj, { root }: ResolverArgs<ReturnType<typeof creditNote>>) =>
    db.creditNote.findUnique({ where: { id: root.id } }).discount(),
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof creditNote>>) =>
    db.creditNote.findUnique({ where: { id: root.id } }).invoice(),
  refund: (_obj, { root }: ResolverArgs<ReturnType<typeof creditNote>>) =>
    db.creditNote.findUnique({ where: { id: root.id } }).refund(),
  tax_rate: (_obj, { root }: ResolverArgs<ReturnType<typeof creditNote>>) =>
    db.creditNote.findUnique({ where: { id: root.id } }).tax_rate(),
  customer_balance_transaction_credit_noteTocustomer_balance_transaction_credit_note_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof creditNote>>) =>
      db.creditNote
        .findUnique({ where: { id: root.id } })
        .customer_balance_transaction_credit_noteTocustomer_balance_transaction_credit_note_id(),
}

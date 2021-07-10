import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const creditNoteLineItems = () => {
  return db.creditNoteLineItem.findMany()
}

export const CreditNoteLineItem = {
  discount: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof creditNoteLineItem>>
  ) => db.creditNoteLineItem.findUnique({ where: { id: root.id } }).discount(),
  invoice_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof creditNoteLineItem>>
  ) =>
    db.creditNoteLineItem.findUnique({ where: { id: root.id } }).invoice_item(),
  tax_rate: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof creditNoteLineItem>>
  ) => db.creditNoteLineItem.findUnique({ where: { id: root.id } }).tax_rate(),
}

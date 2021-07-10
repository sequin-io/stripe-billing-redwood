import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const customerBalanceTransactions = () => {
  return db.customerBalanceTransaction.findMany()
}

export const CustomerBalanceTransaction = {
  credit_note_credit_noteTocustomer_balance_transaction_credit_note_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customerBalanceTransaction>>
  ) =>
    db.customerBalanceTransaction
      .findUnique({ where: { id: root.id } })
      .credit_note_credit_noteTocustomer_balance_transaction_credit_note_id(),
  customer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customerBalanceTransaction>>
  ) =>
    db.customerBalanceTransaction
      .findUnique({ where: { id: root.id } })
      .customer(),
  invoice: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customerBalanceTransaction>>
  ) =>
    db.customerBalanceTransaction
      .findUnique({ where: { id: root.id } })
      .invoice(),
  credit_note_credit_note_customer_balance_transaction_idTocustomer_balance_transaction:
    (
      _obj,
      { root }: ResolverArgs<ReturnType<typeof customerBalanceTransaction>>
    ) =>
      db.customerBalanceTransaction
        .findUnique({ where: { id: root.id } })
        .credit_note_credit_note_customer_balance_transaction_idTocustomer_balance_transaction(),
}

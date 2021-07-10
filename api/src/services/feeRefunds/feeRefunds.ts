import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const feeRefunds = () => {
  return db.feeRefund.findMany()
}

export const FeeRefund = {
  balance_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof feeRefund>>
  ) =>
    db.feeRefund.findUnique({ where: { id: root.id } }).balance_transaction(),
  application_fee: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof feeRefund>>
  ) => db.feeRefund.findUnique({ where: { id: root.id } }).application_fee(),
}

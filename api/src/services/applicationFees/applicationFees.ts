import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const applicationFees = () => {
  return db.applicationFee.findMany()
}

export const ApplicationFee = {
  account: (_obj, { root }: ResolverArgs<ReturnType<typeof applicationFee>>) =>
    db.applicationFee.findUnique({ where: { id: root.id } }).account(),
  application: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof applicationFee>>
  ) => db.applicationFee.findUnique({ where: { id: root.id } }).application(),
  balance_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof applicationFee>>
  ) =>
    db.applicationFee
      .findUnique({ where: { id: root.id } })
      .balance_transaction(),
  charge_application_fee_charge_idTocharge: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof applicationFee>>
  ) =>
    db.applicationFee
      .findUnique({ where: { id: root.id } })
      .charge_application_fee_charge_idTocharge(),
  charge_application_fee_originating_transaction_idTocharge: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof applicationFee>>
  ) =>
    db.applicationFee
      .findUnique({ where: { id: root.id } })
      .charge_application_fee_originating_transaction_idTocharge(),
  charge_application_feeTocharge_application_fee_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof applicationFee>>
  ) =>
    db.applicationFee
      .findUnique({ where: { id: root.id } })
      .charge_application_feeTocharge_application_fee_id(),
  fee_refund: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof applicationFee>>
  ) => db.applicationFee.findUnique({ where: { id: root.id } }).fee_refund(),
}

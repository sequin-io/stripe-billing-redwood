import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const transfers = () => {
  return db.transfer.findMany()
}

export const Transfer = {
  balance_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transfer>>
  ) => db.transfer.findUnique({ where: { id: root.id } }).balance_transaction(),
  account: (_obj, { root }: ResolverArgs<ReturnType<typeof transfer>>) =>
    db.transfer.findUnique({ where: { id: root.id } }).account(),
  charge_chargeTotransfer_destination_payment_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transfer>>
  ) =>
    db.transfer
      .findUnique({ where: { id: root.id } })
      .charge_chargeTotransfer_destination_payment_id(),
  charge_chargeTotransfer_source_transaction_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transfer>>
  ) =>
    db.transfer
      .findUnique({ where: { id: root.id } })
      .charge_chargeTotransfer_source_transaction_id(),
  charge_charge_source_transfer_idTotransfer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transfer>>
  ) =>
    db.transfer
      .findUnique({ where: { id: root.id } })
      .charge_charge_source_transfer_idTotransfer(),
  charge_charge_transfer_idTotransfer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transfer>>
  ) =>
    db.transfer
      .findUnique({ where: { id: root.id } })
      .charge_charge_transfer_idTotransfer(),
  transfer_reversal: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transfer>>
  ) => db.transfer.findUnique({ where: { id: root.id } }).transfer_reversal(),
}

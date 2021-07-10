import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const orders = () => {
  return db.order.findMany()
}

export const Order = {
  application: (_obj, { root }: ResolverArgs<ReturnType<typeof order>>) =>
    db.order.findUnique({ where: { id: root.id } }).application(),
  charge_chargeToorder_charge_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof order>>
  ) =>
    db.order
      .findUnique({ where: { id: root.id } })
      .charge_chargeToorder_charge_id(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof order>>) =>
    db.order.findUnique({ where: { id: root.id } }).customer(),
  sku: (_obj, { root }: ResolverArgs<ReturnType<typeof order>>) =>
    db.order.findUnique({ where: { id: root.id } }).sku(),
  charge_charge_order_idToorder: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof order>>
  ) =>
    db.order
      .findUnique({ where: { id: root.id } })
      .charge_charge_order_idToorder(),
  order_return: (_obj, { root }: ResolverArgs<ReturnType<typeof order>>) =>
    db.order.findUnique({ where: { id: root.id } }).order_return(),
}

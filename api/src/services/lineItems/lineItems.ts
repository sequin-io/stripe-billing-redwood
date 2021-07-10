import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const lineItems = () => {
  return db.lineItem.findMany()
}

export const LineItem = {
  discount: (_obj, { root }: ResolverArgs<ReturnType<typeof lineItem>>) =>
    db.lineItem.findUnique({ where: { id: root.id } }).discount(),
  plan: (_obj, { root }: ResolverArgs<ReturnType<typeof lineItem>>) =>
    db.lineItem.findUnique({ where: { id: root.id } }).plan(),
  price: (_obj, { root }: ResolverArgs<ReturnType<typeof lineItem>>) =>
    db.lineItem.findUnique({ where: { id: root.id } }).price(),
  subscription: (_obj, { root }: ResolverArgs<ReturnType<typeof lineItem>>) =>
    db.lineItem.findUnique({ where: { id: root.id } }).subscription(),
  subscription_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof lineItem>>
  ) => db.lineItem.findUnique({ where: { id: root.id } }).subscription_item(),
  tax_rate: (_obj, { root }: ResolverArgs<ReturnType<typeof lineItem>>) =>
    db.lineItem.findUnique({ where: { id: root.id } }).tax_rate(),
}

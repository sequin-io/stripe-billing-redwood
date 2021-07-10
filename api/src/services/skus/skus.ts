import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const skus = () => {
  return db.sku.findMany()
}

export const Sku = {
  product: (_obj, { root }: ResolverArgs<ReturnType<typeof sku>>) =>
    db.sku.findUnique({ where: { id: root.id } }).product(),
  order: (_obj, { root }: ResolverArgs<ReturnType<typeof sku>>) =>
    db.sku.findUnique({ where: { id: root.id } }).order(),
  order_item: (_obj, { root }: ResolverArgs<ReturnType<typeof sku>>) =>
    db.sku.findUnique({ where: { id: root.id } }).order_item(),
  order_return: (_obj, { root }: ResolverArgs<ReturnType<typeof sku>>) =>
    db.sku.findUnique({ where: { id: root.id } }).order_return(),
}

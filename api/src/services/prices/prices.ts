import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const prices = () => {
  return db.price.findMany()
}

export const Price = {
  product: (_obj, { root }: ResolverArgs<ReturnType<typeof price>>) =>
    db.price.findUnique({ where: { id: root.id } }).product(),
  invoice_item: (_obj, { root }: ResolverArgs<ReturnType<typeof price>>) =>
    db.price.findUnique({ where: { id: root.id } }).invoice_item(),
  item: (_obj, { root }: ResolverArgs<ReturnType<typeof price>>) =>
    db.price.findUnique({ where: { id: root.id } }).item(),
  line_item: (_obj, { root }: ResolverArgs<ReturnType<typeof price>>) =>
    db.price.findUnique({ where: { id: root.id } }).line_item(),
  subscription_item: (_obj, { root }: ResolverArgs<ReturnType<typeof price>>) =>
    db.price.findUnique({ where: { id: root.id } }).subscription_item(),
}

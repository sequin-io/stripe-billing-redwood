import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const subscriptionItems = () => {
  return db.subscriptionItem.findMany()
}

export const SubscriptionItem = {
  plan: (_obj, { root }: ResolverArgs<ReturnType<typeof subscriptionItem>>) =>
    db.subscriptionItem.findUnique({ where: { id: root.id } }).plan(),
  price: (_obj, { root }: ResolverArgs<ReturnType<typeof subscriptionItem>>) =>
    db.subscriptionItem.findUnique({ where: { id: root.id } }).price(),
  subscription: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscriptionItem>>
  ) =>
    db.subscriptionItem.findUnique({ where: { id: root.id } }).subscription(),
  invoice_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscriptionItem>>
  ) =>
    db.subscriptionItem.findUnique({ where: { id: root.id } }).invoice_item(),
  line_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscriptionItem>>
  ) => db.subscriptionItem.findUnique({ where: { id: root.id } }).line_item(),
  usage_record: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscriptionItem>>
  ) =>
    db.subscriptionItem.findUnique({ where: { id: root.id } }).usage_record(),
  usage_record_summary: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscriptionItem>>
  ) =>
    db.subscriptionItem
      .findUnique({ where: { id: root.id } })
      .usage_record_summary(),
}

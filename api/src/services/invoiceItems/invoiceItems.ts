import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const invoiceItems = () => {
  return db.invoiceItem.findMany()
}

export const InvoiceItem = {
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof invoiceItem>>) =>
    db.invoiceItem.findUnique({ where: { id: root.id } }).customer(),
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof invoiceItem>>) =>
    db.invoiceItem.findUnique({ where: { id: root.id } }).invoice(),
  plan: (_obj, { root }: ResolverArgs<ReturnType<typeof invoiceItem>>) =>
    db.invoiceItem.findUnique({ where: { id: root.id } }).plan(),
  price: (_obj, { root }: ResolverArgs<ReturnType<typeof invoiceItem>>) =>
    db.invoiceItem.findUnique({ where: { id: root.id } }).price(),
  subscription: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoiceItem>>
  ) => db.invoiceItem.findUnique({ where: { id: root.id } }).subscription(),
  subscription_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoiceItem>>
  ) =>
    db.invoiceItem.findUnique({ where: { id: root.id } }).subscription_item(),
  credit_note_line_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoiceItem>>
  ) =>
    db.invoiceItem
      .findUnique({ where: { id: root.id } })
      .credit_note_line_item(),
}

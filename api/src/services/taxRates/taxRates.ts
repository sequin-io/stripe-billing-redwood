import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const taxRates = () => {
  return db.taxRate.findMany()
}

export const TaxRate = {
  credit_note: (_obj, { root }: ResolverArgs<ReturnType<typeof taxRate>>) =>
    db.taxRate.findUnique({ where: { id: root.id } }).credit_note(),
  credit_note_line_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof taxRate>>
  ) =>
    db.taxRate.findUnique({ where: { id: root.id } }).credit_note_line_item(),
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof taxRate>>) =>
    db.taxRate.findUnique({ where: { id: root.id } }).invoice(),
  item: (_obj, { root }: ResolverArgs<ReturnType<typeof taxRate>>) =>
    db.taxRate.findUnique({ where: { id: root.id } }).item(),
  line_item: (_obj, { root }: ResolverArgs<ReturnType<typeof taxRate>>) =>
    db.taxRate.findUnique({ where: { id: root.id } }).line_item(),
}

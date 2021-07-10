import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const cards = () => {
  return db.card.findMany()
}

export const Card = {
  account: (_obj, { root }: ResolverArgs<ReturnType<typeof card>>) =>
    db.card.findUnique({ where: { id: root.id } }).account(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof card>>) =>
    db.card.findUnique({ where: { id: root.id } }).customer(),
  recipient_card_recipient_idTorecipient: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof card>>
  ) =>
    db.card
      .findUnique({ where: { id: root.id } })
      .recipient_card_recipient_idTorecipient(),
  recipient_cardTorecipient_default_card_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof card>>
  ) =>
    db.card
      .findUnique({ where: { id: root.id } })
      .recipient_cardTorecipient_default_card_id(),
  three_d_secure: (_obj, { root }: ResolverArgs<ReturnType<typeof card>>) =>
    db.card.findUnique({ where: { id: root.id } }).three_d_secure(),
  token: (_obj, { root }: ResolverArgs<ReturnType<typeof card>>) =>
    db.card.findUnique({ where: { id: root.id } }).token(),
}

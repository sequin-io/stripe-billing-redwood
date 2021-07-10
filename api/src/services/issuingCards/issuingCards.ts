import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const issuingCards = () => {
  return db.issuingCard.findMany()
}

export const IssuingCard = {
  issuing_cardholder: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCard>>
  ) =>
    db.issuingCard.findUnique({ where: { id: root.id } }).issuing_cardholder(),
  issuing_card_issuing_cardToissuing_card_replaced_by_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCard>>
  ) =>
    db.issuingCard
      .findUnique({ where: { id: root.id } })
      .issuing_card_issuing_cardToissuing_card_replaced_by_id(),
  issuing_card_issuing_cardToissuing_card_replacement_for_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCard>>
  ) =>
    db.issuingCard
      .findUnique({ where: { id: root.id } })
      .issuing_card_issuing_cardToissuing_card_replacement_for_id(),
  issuing_authorization: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCard>>
  ) =>
    db.issuingCard
      .findUnique({ where: { id: root.id } })
      .issuing_authorization(),
  other_issuing_card_issuing_cardToissuing_card_replaced_by_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCard>>
  ) =>
    db.issuingCard
      .findUnique({ where: { id: root.id } })
      .other_issuing_card_issuing_cardToissuing_card_replaced_by_id(),
  other_issuing_card_issuing_cardToissuing_card_replacement_for_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCard>>
  ) =>
    db.issuingCard
      .findUnique({ where: { id: root.id } })
      .other_issuing_card_issuing_cardToissuing_card_replacement_for_id(),
  issuing_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCard>>
  ) =>
    db.issuingCard.findUnique({ where: { id: root.id } }).issuing_transaction(),
}

import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const recipients = () => {
  return db.recipient.findMany()
}

export const Recipient = {
  bank_account: (_obj, { root }: ResolverArgs<ReturnType<typeof recipient>>) =>
    db.recipient.findUnique({ where: { id: root.id } }).bank_account(),
  card_cardTorecipient_default_card_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof recipient>>
  ) =>
    db.recipient
      .findUnique({ where: { id: root.id } })
      .card_cardTorecipient_default_card_id(),
  account_accountTorecipient_migrated_to_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof recipient>>
  ) =>
    db.recipient
      .findUnique({ where: { id: root.id } })
      .account_accountTorecipient_migrated_to_id(),
  account_accountTorecipient_rolled_back_from_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof recipient>>
  ) =>
    db.recipient
      .findUnique({ where: { id: root.id } })
      .account_accountTorecipient_rolled_back_from_id(),
  card_card_recipient_idTorecipient: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof recipient>>
  ) =>
    db.recipient
      .findUnique({ where: { id: root.id } })
      .card_card_recipient_idTorecipient(),
}

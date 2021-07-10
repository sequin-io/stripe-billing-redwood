import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const mandates = () => {
  return db.mandate.findMany()
}

export const Mandate = {
  payment_method: (_obj, { root }: ResolverArgs<ReturnType<typeof mandate>>) =>
    db.mandate.findUnique({ where: { id: root.id } }).payment_method(),
  setup_intent_mandateTosetup_intent_mandate_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof mandate>>
  ) =>
    db.mandate
      .findUnique({ where: { id: root.id } })
      .setup_intent_mandateTosetup_intent_mandate_id(),
  setup_intent_mandateTosetup_intent_single_use_mandate_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof mandate>>
  ) =>
    db.mandate
      .findUnique({ where: { id: root.id } })
      .setup_intent_mandateTosetup_intent_single_use_mandate_id(),
}

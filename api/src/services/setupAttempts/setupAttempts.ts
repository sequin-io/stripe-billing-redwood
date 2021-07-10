import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const setupAttempts = () => {
  return db.setupAttempt.findMany()
}

export const SetupAttempt = {
  application: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupAttempt>>
  ) => db.setupAttempt.findUnique({ where: { id: root.id } }).application(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof setupAttempt>>) =>
    db.setupAttempt.findUnique({ where: { id: root.id } }).customer(),
  account: (_obj, { root }: ResolverArgs<ReturnType<typeof setupAttempt>>) =>
    db.setupAttempt.findUnique({ where: { id: root.id } }).account(),
  payment_method_payment_methodTosetup_attempt_payment_method_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupAttempt>>
  ) =>
    db.setupAttempt
      .findUnique({ where: { id: root.id } })
      .payment_method_payment_methodTosetup_attempt_payment_method_id(),
  payment_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupAttempt>>
  ) => db.setupAttempt.findUnique({ where: { id: root.id } }).payment_intent(),
  payment_method_payment_methodTosetup_attempt_setup_error_payment_method_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupAttempt>>
  ) =>
    db.setupAttempt
      .findUnique({ where: { id: root.id } })
      .payment_method_payment_methodTosetup_attempt_setup_error_payment_method_id(),
  setup_intent_setup_attempt_setup_error_setup_intent_idTosetup_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupAttempt>>
  ) =>
    db.setupAttempt
      .findUnique({ where: { id: root.id } })
      .setup_intent_setup_attempt_setup_error_setup_intent_idTosetup_intent(),
  setup_intent_setup_attempt_setup_intent_idTosetup_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupAttempt>>
  ) =>
    db.setupAttempt
      .findUnique({ where: { id: root.id } })
      .setup_intent_setup_attempt_setup_intent_idTosetup_intent(),
  setup_intent_setup_attemptTosetup_intent_latest_attempt_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupAttempt>>
  ) =>
    db.setupAttempt
      .findUnique({ where: { id: root.id } })
      .setup_intent_setup_attemptTosetup_intent_latest_attempt_id(),
}

import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const setupIntents = () => {
  return db.setupIntent.findMany()
}

export const SetupIntent = {
  application: (_obj, { root }: ResolverArgs<ReturnType<typeof setupIntent>>) =>
    db.setupIntent.findUnique({ where: { id: root.id } }).application(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof setupIntent>>) =>
    db.setupIntent.findUnique({ where: { id: root.id } }).customer(),
  payment_intent_payment_intentTosetup_intent_last_setup_error_payment_intent_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof setupIntent>>) =>
      db.setupIntent
        .findUnique({ where: { id: root.id } })
        .payment_intent_payment_intentTosetup_intent_last_setup_error_payment_intent_id(),
  payment_method_payment_methodTosetup_intent_last_setup_error_payment_method_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof setupIntent>>) =>
      db.setupIntent
        .findUnique({ where: { id: root.id } })
        .payment_method_payment_methodTosetup_intent_last_setup_error_payment_method_id(),
  setup_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) => db.setupIntent.findUnique({ where: { id: root.id } }).setup_intent(),
  setup_attempt_setup_attemptTosetup_intent_latest_attempt_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) =>
    db.setupIntent
      .findUnique({ where: { id: root.id } })
      .setup_attempt_setup_attemptTosetup_intent_latest_attempt_id(),
  mandate_mandateTosetup_intent_mandate_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) =>
    db.setupIntent
      .findUnique({ where: { id: root.id } })
      .mandate_mandateTosetup_intent_mandate_id(),
  account: (_obj, { root }: ResolverArgs<ReturnType<typeof setupIntent>>) =>
    db.setupIntent.findUnique({ where: { id: root.id } }).account(),
  payment_method_payment_methodTosetup_intent_payment_method_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) =>
    db.setupIntent
      .findUnique({ where: { id: root.id } })
      .payment_method_payment_methodTosetup_intent_payment_method_id(),
  mandate_mandateTosetup_intent_single_use_mandate_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) =>
    db.setupIntent
      .findUnique({ where: { id: root.id } })
      .mandate_mandateTosetup_intent_single_use_mandate_id(),
  checkout_session: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) => db.setupIntent.findUnique({ where: { id: root.id } }).checkout_session(),
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof setupIntent>>) =>
    db.setupIntent.findUnique({ where: { id: root.id } }).invoice(),
  payment_intent_payment_intent_last_payment_error_setup_intent_idTosetup_intent:
    (_obj, { root }: ResolverArgs<ReturnType<typeof setupIntent>>) =>
      db.setupIntent
        .findUnique({ where: { id: root.id } })
        .payment_intent_payment_intent_last_payment_error_setup_intent_idTosetup_intent(),
  setup_attempt_setup_attempt_setup_error_setup_intent_idTosetup_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) =>
    db.setupIntent
      .findUnique({ where: { id: root.id } })
      .setup_attempt_setup_attempt_setup_error_setup_intent_idTosetup_intent(),
  setup_attempt_setup_attempt_setup_intent_idTosetup_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) =>
    db.setupIntent
      .findUnique({ where: { id: root.id } })
      .setup_attempt_setup_attempt_setup_intent_idTosetup_intent(),
  other_setup_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) =>
    db.setupIntent.findUnique({ where: { id: root.id } }).other_setup_intent(),
  subscription: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof setupIntent>>
  ) => db.setupIntent.findUnique({ where: { id: root.id } }).subscription(),
}

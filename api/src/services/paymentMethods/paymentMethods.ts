import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const paymentMethods = () => {
  return db.paymentMethod.findMany()
}

export const PaymentMethod = {
  customer_customerTopayment_method_customer_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentMethod>>
  ) =>
    db.paymentMethod
      .findUnique({ where: { id: root.id } })
      .customer_customerTopayment_method_customer_id(),
  charge: (_obj, { root }: ResolverArgs<ReturnType<typeof paymentMethod>>) =>
    db.paymentMethod.findUnique({ where: { id: root.id } }).charge(),
  customer_customer_invoice_settings_default_payment_method_idTopayment_method:
    (_obj, { root }: ResolverArgs<ReturnType<typeof paymentMethod>>) =>
      db.paymentMethod
        .findUnique({ where: { id: root.id } })
        .customer_customer_invoice_settings_default_payment_method_idTopayment_method(),
  invoice_invoice_default_payment_method_idTopayment_method: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentMethod>>
  ) =>
    db.paymentMethod
      .findUnique({ where: { id: root.id } })
      .invoice_invoice_default_payment_method_idTopayment_method(),
  invoice_invoice_last_finalization_error_payment_method_idTopayment_method: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentMethod>>
  ) =>
    db.paymentMethod
      .findUnique({ where: { id: root.id } })
      .invoice_invoice_last_finalization_error_payment_method_idTopayment_method(),
  mandate: (_obj, { root }: ResolverArgs<ReturnType<typeof paymentMethod>>) =>
    db.paymentMethod.findUnique({ where: { id: root.id } }).mandate(),
  payment_intent_payment_intent_last_payment_error_payment_method_idTopayment_method:
    (_obj, { root }: ResolverArgs<ReturnType<typeof paymentMethod>>) =>
      db.paymentMethod
        .findUnique({ where: { id: root.id } })
        .payment_intent_payment_intent_last_payment_error_payment_method_idTopayment_method(),
  payment_intent_payment_intent_payment_method_idTopayment_method: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentMethod>>
  ) =>
    db.paymentMethod
      .findUnique({ where: { id: root.id } })
      .payment_intent_payment_intent_payment_method_idTopayment_method(),
  setup_attempt_payment_methodTosetup_attempt_payment_method_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentMethod>>
  ) =>
    db.paymentMethod
      .findUnique({ where: { id: root.id } })
      .setup_attempt_payment_methodTosetup_attempt_payment_method_id(),
  setup_attempt_payment_methodTosetup_attempt_setup_error_payment_method_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentMethod>>
  ) =>
    db.paymentMethod
      .findUnique({ where: { id: root.id } })
      .setup_attempt_payment_methodTosetup_attempt_setup_error_payment_method_id(),
  setup_intent_payment_methodTosetup_intent_last_setup_error_payment_method_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof paymentMethod>>) =>
      db.paymentMethod
        .findUnique({ where: { id: root.id } })
        .setup_intent_payment_methodTosetup_intent_last_setup_error_payment_method_id(),
  setup_intent_payment_methodTosetup_intent_payment_method_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentMethod>>
  ) =>
    db.paymentMethod
      .findUnique({ where: { id: root.id } })
      .setup_intent_payment_methodTosetup_intent_payment_method_id(),
  subscription: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentMethod>>
  ) => db.paymentMethod.findUnique({ where: { id: root.id } }).subscription(),
  subscription_schedule_payment_methodTosubscription_schedule_default_settings_default_payment_method_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof paymentMethod>>) =>
      db.paymentMethod
        .findUnique({ where: { id: root.id } })
        .subscription_schedule_payment_methodTosubscription_schedule_default_settings_default_payment_method_id(),
  subscription_schedule_payment_methodTosubscription_schedule_phases_default_payment_method_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof paymentMethod>>) =>
      db.paymentMethod
        .findUnique({ where: { id: root.id } })
        .subscription_schedule_payment_methodTosubscription_schedule_phases_default_payment_method_id(),
}

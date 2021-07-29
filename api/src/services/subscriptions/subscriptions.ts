import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const subscriptions = () => {
  return db.subscription.findMany()
}

export const Subscription = {
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof subscription>>) =>
    db.subscription.findUnique({ where: { id: root.id } }).customer(),
  payment_method: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) => db.subscription.findUnique({ where: { id: root.id } }).payment_method(),
  discount_discountTosubscription_discount_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) =>
    db.subscription
      .findUnique({ where: { id: root.id } })
      .discount_discountTosubscription_discount_id(),
  latest_invoice: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) => db.subscription.findUnique({ where: { id: root.id } }).latest_invoice(),
  setup_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) => db.subscription.findUnique({ where: { id: root.id } }).setup_intent(),
  subscription_schedule_subscription_schedule_idTosubscription_schedule: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) =>
    db.subscription
      .findUnique({ where: { id: root.id } })
      .subscription_schedule_subscription_schedule_idTosubscription_schedule(),
  account: (_obj, { root }: ResolverArgs<ReturnType<typeof subscription>>) =>
    db.subscription.findUnique({ where: { id: root.id } }).account(),
  checkout_session: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) =>
    db.subscription.findUnique({ where: { id: root.id } }).checkout_session(),
  discount_discount_subscription_idTosubscription: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) =>
    db.subscription
      .findUnique({ where: { id: root.id } })
      .discount_discount_subscription_idTosubscription(),
  invoice_invoice_subscription_idTosubscription: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) =>
    db.subscription
      .findUnique({ where: { id: root.id } })
      .invoice_invoice_subscription_idTosubscription(),
  invoice_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) => db.subscription.findUnique({ where: { id: root.id } }).invoice_item(),
  line_item: (_obj, { root }: ResolverArgs<ReturnType<typeof subscription>>) =>
    db.subscription.findUnique({ where: { id: root.id } }).line_item(),
  subscription_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) =>
    db.subscription.findUnique({ where: { id: root.id } }).subscription_item(),
  subscription_schedule_subscriptionTosubscription_schedule_subscription_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscription>>
  ) =>
    db.subscription
      .findUnique({ where: { id: root.id } })
      .subscription_schedule_subscriptionTosubscription_schedule_subscription_id(),
}

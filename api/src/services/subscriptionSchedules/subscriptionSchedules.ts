import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const subscriptionSchedules = () => {
  return db.subscriptionSchedule.findMany()
}

export const SubscriptionSchedule = {
  customer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscriptionSchedule>>
  ) =>
    db.subscriptionSchedule.findUnique({ where: { id: root.id } }).customer(),
  payment_method_payment_methodTosubscription_schedule_default_settings_default_payment_method_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof subscriptionSchedule>>) =>
      db.subscriptionSchedule
        .findUnique({ where: { id: root.id } })
        .payment_method_payment_methodTosubscription_schedule_default_settings_default_payment_method_id(),
  coupon: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscriptionSchedule>>
  ) => db.subscriptionSchedule.findUnique({ where: { id: root.id } }).coupon(),
  payment_method_payment_methodTosubscription_schedule_phases_default_payment_method_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof subscriptionSchedule>>) =>
      db.subscriptionSchedule
        .findUnique({ where: { id: root.id } })
        .payment_method_payment_methodTosubscription_schedule_phases_default_payment_method_id(),
  subscription_subscriptionTosubscription_schedule_subscription_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscriptionSchedule>>
  ) =>
    db.subscriptionSchedule
      .findUnique({ where: { id: root.id } })
      .subscription_subscriptionTosubscription_schedule_subscription_id(),
  subscription_subscription_schedule_idTosubscription_schedule: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof subscriptionSchedule>>
  ) =>
    db.subscriptionSchedule
      .findUnique({ where: { id: root.id } })
      .subscription_subscription_schedule_idTosubscription_schedule(),
}

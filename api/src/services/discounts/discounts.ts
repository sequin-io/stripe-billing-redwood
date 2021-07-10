import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const discounts = () => {
  return db.discount.findMany()
}

export const Discount = {
  coupon: (_obj, { root }: ResolverArgs<ReturnType<typeof discount>>) =>
    db.discount.findUnique({ where: { id: root.id } }).coupon(),
  customer_customerTodiscount_customer_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof discount>>
  ) =>
    db.discount
      .findUnique({ where: { id: root.id } })
      .customer_customerTodiscount_customer_id(),
  invoice_discount_invoice_idToinvoice: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof discount>>
  ) =>
    db.discount
      .findUnique({ where: { id: root.id } })
      .invoice_discount_invoice_idToinvoice(),
  promotion_code: (_obj, { root }: ResolverArgs<ReturnType<typeof discount>>) =>
    db.discount.findUnique({ where: { id: root.id } }).promotion_code(),
  subscription_discount_subscription_idTosubscription: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof discount>>
  ) =>
    db.discount
      .findUnique({ where: { id: root.id } })
      .subscription_discount_subscription_idTosubscription(),
  credit_note: (_obj, { root }: ResolverArgs<ReturnType<typeof discount>>) =>
    db.discount.findUnique({ where: { id: root.id } }).credit_note(),
  credit_note_line_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof discount>>
  ) =>
    db.discount.findUnique({ where: { id: root.id } }).credit_note_line_item(),
  customer_customer_discount_idTodiscount: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof discount>>
  ) =>
    db.discount
      .findUnique({ where: { id: root.id } })
      .customer_customer_discount_idTodiscount(),
  invoice_discountToinvoice_discount_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof discount>>
  ) =>
    db.discount
      .findUnique({ where: { id: root.id } })
      .invoice_discountToinvoice_discount_id(),
  invoice_discountToinvoice_total_discount_amounts_discount_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof discount>>
  ) =>
    db.discount
      .findUnique({ where: { id: root.id } })
      .invoice_discountToinvoice_total_discount_amounts_discount_id(),
  item: (_obj, { root }: ResolverArgs<ReturnType<typeof discount>>) =>
    db.discount.findUnique({ where: { id: root.id } }).item(),
  line_item: (_obj, { root }: ResolverArgs<ReturnType<typeof discount>>) =>
    db.discount.findUnique({ where: { id: root.id } }).line_item(),
  subscription_discountTosubscription_discount_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof discount>>
  ) =>
    db.discount
      .findUnique({ where: { id: root.id } })
      .subscription_discountTosubscription_discount_id(),
}

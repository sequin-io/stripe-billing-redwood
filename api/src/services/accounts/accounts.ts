import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const accounts = () => {
  return db.account.findMany()
}

export const Account = {
  person_account_individual_idToperson: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .person_account_individual_idToperson(),
  application_fee: (_obj, { root }: ResolverArgs<ReturnType<typeof account>>) =>
    db.account.findUnique({ where: { id: root.id } }).application_fee(),
  bank_account: (_obj, { root }: ResolverArgs<ReturnType<typeof account>>) =>
    db.account.findUnique({ where: { id: root.id } }).bank_account(),
  capability: (_obj, { root }: ResolverArgs<ReturnType<typeof account>>) =>
    db.account.findUnique({ where: { id: root.id } }).capability(),
  card: (_obj, { root }: ResolverArgs<ReturnType<typeof account>>) =>
    db.account.findUnique({ where: { id: root.id } }).card(),
  charge_accountTocharge_destination_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .charge_accountTocharge_destination_id(),
  charge_accountTocharge_on_behalf_of_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .charge_accountTocharge_on_behalf_of_id(),
  charge_accountTocharge_transfer_data_destination_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .charge_accountTocharge_transfer_data_destination_id(),
  connect_collection_transfer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .connect_collection_transfer(),
  event: (_obj, { root }: ResolverArgs<ReturnType<typeof account>>) =>
    db.account.findUnique({ where: { id: root.id } }).event(),
  invoice_accountToinvoice_on_behalf_of_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .invoice_accountToinvoice_on_behalf_of_id(),
  invoice_accountToinvoice_transfer_data_destination_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .invoice_accountToinvoice_transfer_data_destination_id(),
  payment_intent_accountTopayment_intent_on_behalf_of_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .payment_intent_accountTopayment_intent_on_behalf_of_id(),
  payment_intent_accountTopayment_intent_transfer_data_destination_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .payment_intent_accountTopayment_intent_transfer_data_destination_id(),
  person_accountToperson_account_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .person_accountToperson_account_id(),
  platform_tax_fee: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) => db.account.findUnique({ where: { id: root.id } }).platform_tax_fee(),
  recipient_accountTorecipient_migrated_to_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .recipient_accountTorecipient_migrated_to_id(),
  recipient_accountTorecipient_rolled_back_from_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof account>>
  ) =>
    db.account
      .findUnique({ where: { id: root.id } })
      .recipient_accountTorecipient_rolled_back_from_id(),
  setup_attempt: (_obj, { root }: ResolverArgs<ReturnType<typeof account>>) =>
    db.account.findUnique({ where: { id: root.id } }).setup_attempt(),
  setup_intent: (_obj, { root }: ResolverArgs<ReturnType<typeof account>>) =>
    db.account.findUnique({ where: { id: root.id } }).setup_intent(),
  subscription: (_obj, { root }: ResolverArgs<ReturnType<typeof account>>) =>
    db.account.findUnique({ where: { id: root.id } }).subscription(),
  transfer: (_obj, { root }: ResolverArgs<ReturnType<typeof account>>) =>
    db.account.findUnique({ where: { id: root.id } }).transfer(),
}

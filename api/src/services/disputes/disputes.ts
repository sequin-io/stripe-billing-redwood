import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const disputes = () => {
  return db.dispute.findMany()
}

export const Dispute = {
  charge_chargeTodispute_charge_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .charge_chargeTodispute_charge_id(),
  file_dispute_evidence_cancellation_policy_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .file_dispute_evidence_cancellation_policy_idTofile(),
  file_dispute_evidence_customer_communication_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .file_dispute_evidence_customer_communication_idTofile(),
  file_dispute_evidence_customer_signature_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .file_dispute_evidence_customer_signature_idTofile(),
  file_dispute_evidence_duplicate_charge_documentation_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .file_dispute_evidence_duplicate_charge_documentation_idTofile(),
  file_dispute_evidence_receipt_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .file_dispute_evidence_receipt_idTofile(),
  file_dispute_evidence_refund_policy_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .file_dispute_evidence_refund_policy_idTofile(),
  file_dispute_evidence_service_documentation_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .file_dispute_evidence_service_documentation_idTofile(),
  file_dispute_evidence_shipping_documentation_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .file_dispute_evidence_shipping_documentation_idTofile(),
  file_dispute_evidence_uncategorized_file_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .file_dispute_evidence_uncategorized_file_idTofile(),
  payment_intent: (_obj, { root }: ResolverArgs<ReturnType<typeof dispute>>) =>
    db.dispute.findUnique({ where: { id: root.id } }).payment_intent(),
  charge_charge_dispute_idTodispute: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof dispute>>
  ) =>
    db.dispute
      .findUnique({ where: { id: root.id } })
      .charge_charge_dispute_idTodispute(),
}

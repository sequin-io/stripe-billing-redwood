import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const files = () => {
  return db.file.findMany()
}

export const File = {
  dispute_dispute_evidence_cancellation_policy_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) =>
    db.file
      .findUnique({ where: { id: root.id } })
      .dispute_dispute_evidence_cancellation_policy_idTofile(),
  dispute_dispute_evidence_customer_communication_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) =>
    db.file
      .findUnique({ where: { id: root.id } })
      .dispute_dispute_evidence_customer_communication_idTofile(),
  dispute_dispute_evidence_customer_signature_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) =>
    db.file
      .findUnique({ where: { id: root.id } })
      .dispute_dispute_evidence_customer_signature_idTofile(),
  dispute_dispute_evidence_duplicate_charge_documentation_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) =>
    db.file
      .findUnique({ where: { id: root.id } })
      .dispute_dispute_evidence_duplicate_charge_documentation_idTofile(),
  dispute_dispute_evidence_receipt_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) =>
    db.file
      .findUnique({ where: { id: root.id } })
      .dispute_dispute_evidence_receipt_idTofile(),
  dispute_dispute_evidence_refund_policy_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) =>
    db.file
      .findUnique({ where: { id: root.id } })
      .dispute_dispute_evidence_refund_policy_idTofile(),
  dispute_dispute_evidence_service_documentation_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) =>
    db.file
      .findUnique({ where: { id: root.id } })
      .dispute_dispute_evidence_service_documentation_idTofile(),
  dispute_dispute_evidence_shipping_documentation_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) =>
    db.file
      .findUnique({ where: { id: root.id } })
      .dispute_dispute_evidence_shipping_documentation_idTofile(),
  dispute_dispute_evidence_uncategorized_file_idTofile: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) =>
    db.file
      .findUnique({ where: { id: root.id } })
      .dispute_dispute_evidence_uncategorized_file_idTofile(),
  file_link: (_obj, { root }: ResolverArgs<ReturnType<typeof file>>) =>
    db.file.findUnique({ where: { id: root.id } }).file_link(),
  reporting_report_run: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) => db.file.findUnique({ where: { id: root.id } }).reporting_report_run(),
  scheduled_query_run: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof file>>
  ) => db.file.findUnique({ where: { id: root.id } }).scheduled_query_run(),
}

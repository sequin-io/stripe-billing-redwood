import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const reportingReportRuns = () => {
  return db.reportingReportRun.findMany()
}

export const ReportingReportRun = {
  reporting_report_type: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof reportingReportRun>>
  ) =>
    db.reportingReportRun
      .findUnique({ where: { id: root.id } })
      .reporting_report_type(),
  file: (_obj, { root }: ResolverArgs<ReturnType<typeof reportingReportRun>>) =>
    db.reportingReportRun.findUnique({ where: { id: root.id } }).file(),
}

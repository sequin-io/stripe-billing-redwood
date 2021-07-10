import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const reportingReportTypes = () => {
  return db.reportingReportType.findMany()
}

export const ReportingReportType = {
  reporting_report_run: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof reportingReportType>>
  ) =>
    db.reportingReportType
      .findUnique({ where: { id: root.id } })
      .reporting_report_run(),
}

import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ReportingReportRunCreateArgs>({
  reportingReportRun: {
    one: { id: 'String', parameters_columns: 'String' },
    two: { id: 'String', parameters_columns: 'String' },
  },
})

export type StandardScenario = typeof standard

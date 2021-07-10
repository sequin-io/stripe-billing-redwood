import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ReportingReportTypeCreateArgs>({
  reportingReportType: {
    one: { id: 'String', default_columns: 'String' },
    two: { id: 'String', default_columns: 'String' },
  },
})

export type StandardScenario = typeof standard

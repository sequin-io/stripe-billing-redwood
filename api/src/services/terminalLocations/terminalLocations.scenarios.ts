import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TerminalLocationCreateArgs>({
  terminalLocation: { one: { id: 'String' }, two: { id: 'String' } },
})

export type StandardScenario = typeof standard

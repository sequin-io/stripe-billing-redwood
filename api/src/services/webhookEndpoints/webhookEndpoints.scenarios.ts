import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WebhookEndpointCreateArgs>({
  webhookEndpoint: {
    one: { id: 'String', enabled_events: 'String' },
    two: { id: 'String', enabled_events: 'String' },
  },
})

export type StandardScenario = typeof standard

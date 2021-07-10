import { events } from './events'
import type { StandardScenario } from './events.scenarios'

describe('events', () => {
  scenario('returns all events', async (scenario: StandardScenario) => {
    const result = await events()

    expect(result.length).toEqual(Object.keys(scenario.event).length)
  })
})

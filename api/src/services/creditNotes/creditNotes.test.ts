import { creditNotes } from './creditNotes'
import type { StandardScenario } from './creditNotes.scenarios'

describe('creditNotes', () => {
  scenario('returns all creditNotes', async (scenario: StandardScenario) => {
    const result = await creditNotes()

    expect(result.length).toEqual(Object.keys(scenario.creditNote).length)
  })
})

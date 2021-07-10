import { creditNoteLineItems } from './creditNoteLineItems'
import type { StandardScenario } from './creditNoteLineItems.scenarios'

describe('creditNoteLineItems', () => {
  scenario(
    'returns all creditNoteLineItems',
    async (scenario: StandardScenario) => {
      const result = await creditNoteLineItems()

      expect(result.length).toEqual(
        Object.keys(scenario.creditNoteLineItem).length
      )
    }
  )
})

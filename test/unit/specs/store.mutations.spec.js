import { expect } from 'chai'
import { mutations } from '@/store'

const { SET_ERROR, CLEAR_ERROR } = mutations

describe('Mutations', () => {
  describe('Error', () => {
    it('SET_ERROR', () => {
      const state = { error: '' }
      SET_ERROR(state, 'some error')
      expect(state.error).to.equal('some error')
    })
    it('CLEAR_ERROR', () => {
      const state = { error: 'some error' }
      CLEAR_ERROR(state)
      expect(state.error).to.equal('')
    })
  })
})
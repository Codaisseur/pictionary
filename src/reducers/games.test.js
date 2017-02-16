import chai, { expect } from 'chai'
import games, { dummyData } from './games'

describe('games reducer', () => {
  const initialState = games()
  const expectedState = []

  it('return an empty array for the initial state', () => {
    expect(initialState).to.eql(expectedState)
  })

})

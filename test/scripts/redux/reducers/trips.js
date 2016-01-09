import expect from 'expect'
import tripsReducer from '../../../../src/scripts/redux/reducers/trips.js'

describe('trips reducer', () => {
  it('should return the initial state', () => {
    expect(
      tripsReducer(undefined, {})
    ).toEqual({
      filter: '',
      loadError: null,
      loading: true,
      trips: [],
      visibleTrips: []
    })
  })
})

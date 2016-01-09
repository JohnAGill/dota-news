import expect from 'expect'
import _ from 'lodash'
import tripsReducer from '../../../../src/scripts/redux/reducers/trips.js'

const trip = {destination: 'dest', uid: 'uid1'}

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

  it('should handle TRIPS_LOAD_SUCCESS', () => {
    expect(
      tripsReducer(undefined, {type: 'TRIPS_LOAD_SUCCESS', payload: [trip]})
    ).toEqual({
      filter: '',
      loadError: null,
      loading: false,
      trips: [trip],
      visibleTrips: [trip]
    })
  })

  it('should handle TRIPS_LOAD_ERROR', () => {
    expect(
      tripsReducer(undefined, {type: 'TRIPS_LOAD_ERROR', payload: 'error'})
    ).toEqual({
      filter: '',
      loadError: 'error',
      loading: false,
      trips: [],
      visibleTrips: []
    })
  })

  it('should handle TRIPS_LOAD_REQUEST', () => {
    expect(
      tripsReducer(undefined, {type: 'TRIPS_LOAD_REQUEST', payload: 'error'})
    ).toEqual({
      filter: '',
      loadError: null,
      loading: true,
      trips: [],
      visibleTrips: []
    })
  })

  _.each(['TRIP_DELETE_SUCCESS', 'TRIP_DELETE_REQUEST'], (action) => {
    it(`should handle ${action}`, () => {
      expect(
        tripsReducer(undefined, {type: action})
      ).toEqual({
        filter: '',
        loadError: null,
        deleteError: null,
        loading: true,
        trips: [],
        visibleTrips: []
      })
    })

  })

  it('should handle TRIP_DELETE_ERROR', () => {
    expect(
      tripsReducer(undefined, {type: 'TRIP_DELETE_ERROR', payload: 'error'})
    ).toEqual({
      filter: '',
      loadError: null,
      deleteError: 'error',
      loading: true,
      trips: [],
      visibleTrips: []
    })
  })

  describe('should handle TRIPS_UPDATE_FILTER', () => {
  _.each([
      {filter: '', trips: [trip, trip], expected: {filter: '', visibleTrips: [trip, trip]}},
      {filter: 'hell', trips: [{...trip, destination: 'hello'}, trip], expected: {filter: 'hell', visibleTrips: [{...trip, destination: 'hello'}]}},
      {filter: 'hells kitchen', trips: [{...trip, destination: 'hello'}, {...trip, destination: 'hells kitchen'}], expected: {filter: 'hells kitchen', visibleTrips: [{...trip, destination: 'hells kitchen'}]}},
    ], testCase => {
      it(`'${testCase.filter}' shows: ${JSON.stringify(testCase.expected.visibleTrips)}`, () => {
        const initialState = tripsReducer(undefined, {type: 'none'})
        const startState = {...initialState, trips: testCase.trips}
        expect(
          tripsReducer(startState, {type: 'TRIPS_UPDATE_FILTER', payload: testCase.filter})
        ).toEqual(
          {...startState, ...testCase.expected}
        )
      })
    })
  })

})

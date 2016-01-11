

import expect from 'expect'
import _ from 'lodash'
import superagent from 'superagent'

const tripsUrl = 'https://toptal-project.firebaseio.com/trips.json'

describe('rest example', () => {
  xit(`should get data from ${tripsUrl}`, (done) => {
    superagent
      .get(tripsUrl)
      .end((err, res) => {
        expect(res.body).toBeAn(Object)
        expect(res.status).toEqual(200)
        done()
      });
  })
})

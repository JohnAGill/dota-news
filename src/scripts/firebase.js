import Firebase from 'firebase'
const ref = new Firebase('https://toptal-project.firebaseio.com')

export default function addData() {
  const addTest = ref.child('addTest')
  addTest.set({
    hello: 'hello',
    goodbye: 'goodbye',
    cool: 'cool',
    please: 'work'
  })
  ref.on('value', (snapshot) => {
    console.log(snapshot.val())
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.code)
  })
}

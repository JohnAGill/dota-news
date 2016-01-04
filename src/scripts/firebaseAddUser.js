import Firebase from 'firebase'
const ref = new Firebase('https://toptal-project.firebaseio.com')

export default function addUser(userId, name, provider) {
  const createUser = ref.child('jogs')
  createUser.push({
    userId,
    name,
    provider
  })
  ref.on('value', (snapshot) => {
    console.log(snapshot.val())
  }, (errorObject) => {
    console.log(`The read failed: ${errorObject.code}`)
  })
}

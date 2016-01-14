
export default function getUidFromState(state) {
  return(state.users.userAuth.uid)
}

export function getAdminUseridFromState(state) {
  return(state.trips.trips)
}


export function autoRehydrated(state = false, action = {}) {
  const { type, payload } = action;

  switch(type) {
    case 'persist/REHYDRATE':

      return true
  }

  return state
}

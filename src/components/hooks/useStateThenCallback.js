import { useState, useEffect } from 'react'

function useStateThenCallback(initialValue, callback) {
  const [state, setState] = useState(initialValue)
  useEffect(() => callback(), [state, callback])

  return [state, setState]
}

export default useStateThenCallback

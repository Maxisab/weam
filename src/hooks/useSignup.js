import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

// FIREBASE IMPORTS
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = (email, password) => {
    setError(null)
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'ERROR', payload: null })
        dispatch({ type: 'LOGIN', payload: res.user })
      })
      .catch((err) => {
        setError(err.message)
        console.log(err.code)
        dispatch({ type: 'ERROR', payload: err.code })
      })

  }

  return { error, signup }
}
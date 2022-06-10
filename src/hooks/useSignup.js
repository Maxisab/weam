import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useProfile } from './useProfile'
// FIREBASE IMPORTS
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
  const { createUserProfile, getUserProfile } = useProfile()

  const signup = async (email, password) => {
    setError(null)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      dispatch({ type: 'ERROR', payload: null })
      dispatch({ type: 'LOGIN', payload: res.user })
      createUserProfile(email)
    } catch (err) {
      setError(err.message)
      console.log(err.code)
      dispatch({ type: 'ERROR', payload: err.code })
    }

  }

  return { error, signup }
}
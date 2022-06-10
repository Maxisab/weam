import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useProfile } from './useProfile'

// FIREBASE IMPORTS
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
  const { getUserProfile } = useProfile()


  const login = async (email, password) => {
    setError(null)
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      dispatch({ type: 'ERROR', payload: null })
      dispatch({ type: 'LOGIN', payload: res.user })
      getUserProfile(email)
    } catch (err) {
      setError(err)
      console.log(err)
      dispatch({ type: 'ERROR', payload: err })
    }

  }

  return { error, login }
}
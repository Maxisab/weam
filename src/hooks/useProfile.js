// REACT
import { useState } from 'react'
// FIREBASE
import { firestore } from '../firebase/config'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'
// AUTH
import { useAuthContext } from './useAuthContext'

export const useProfile = () => {
  const { dispatch, userData } = useAuthContext()

  const createUserProfile = async (user) => {
    setDoc(doc(firestore, 'userDocs', user), {
      email: user
    })
    getUserProfile(user)
  }

  const getUserProfile = async (user) => {
    const userRef = doc(firestore, `userDocs`, user)
    const userDoc = await getDoc(userRef)
    if (userDoc.exists()) {
      dispatch({ type: 'SET_USER', payload: userDoc.data() })
    } else {
      console.log("No such document!");
    }
  }

  return { createUserProfile, getUserProfile }
}
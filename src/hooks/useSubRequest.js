// REACT
// FIREBASE
import { firestore } from '../firebase/config'
import { collection, doc, setDoc } from 'firebase/firestore'

export const useSubRequest = () => {

  const createSubRequest = async (data) => {
    const docRef = doc(collection(firestore, 'subRequests'))
    await setDoc(docRef, data)
  }

  return { createSubRequest }
}
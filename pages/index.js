import { Login, Agenda } from './../components'
import { firebaseClient } from './../config/firebase'
import 'firebase/auth'
import { useEffect, useState } from 'react'


export default function Home() {
  const [auth, setAuth] = useState({
    loading: true,
    user:false,
  })

  useEffect(() => {
    firebaseClient.auth().onAuthStateChanged(user => {
      setAuth({
        loading: false,
        user
      })
    })
  }, [])
  if (auth.loading) {
    return 'Loading...'
  }
  //const authenticateUser = firebaseClient.auth().currentUser
  return auth.user ? <Agenda /> : <Login />
}
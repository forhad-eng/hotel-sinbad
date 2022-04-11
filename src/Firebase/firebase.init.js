import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyA_Z2yPh3-S0LnPETT__gAToI6qDMthx5M',
    authDomain: 'hotel-sinbad.firebaseapp.com',
    projectId: 'hotel-sinbad',
    storageBucket: 'hotel-sinbad.appspot.com',
    messagingSenderId: '402537555703',
    appId: '1:402537555703:web:019db3c57437c3683d15f2'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

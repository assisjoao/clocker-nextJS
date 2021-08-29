// //import { initializeApp } from "firebase/app";
// import firebaseClient from "firebase/app";
// import 'firebase/auth'

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
//   };


// //const app = initializeApp(firebaseConfig);

  
// const app = firebaseClient.apps.length ? firebaseClient.app() : firebaseClient.initializeApp(firebaseConfig)

// export const persistenceMode = firebaseClient.auth.Auth.Persistence.LOCAL

// export {firebaseClient}

import firebaseServer from 'firebase-firebaseServer'

const app = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp({
        credential: firebaseServer.credential.cert({
            type: "service_account",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            project_id: process.env.PROJECT_ID,
            private_key_id: process.env.PRIVATE_KEY_ID,
            private_key: process.env.PRIVATE_KEY,
            client_email: process.env.CLIENT_EMAIL,
            client_id: process.env.CLIENT_ID,
            client_cert: process.env.CLIENT_CERT
        })
    })

export { firebaseServer }

// import admin from "firebase-admin"


// admin.initializeApp({
//   credential: admin.credential.cert({
//    type: process.env.TYPE,
//    })
// });
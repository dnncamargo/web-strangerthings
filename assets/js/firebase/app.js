  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyA5WKTXtsCAHYBy_voKkfN_4Dslcc45wtg",
    authDomain: "web-strangerthings.firebaseapp.com",
    projectId: "web-strangerthings",
    storageBucket: "web-strangerthings.appspot.com",
    messagingSenderId: "244384721540",
    appId: "1:244384721540:web:ed36d0edf23593b79a30d1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;
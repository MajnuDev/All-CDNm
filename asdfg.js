
    // Import the functions you need from the SDKs you need
   
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
    import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithPhoneNumber, RecaptchaVerifier} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCPzHFHo6cxDYW7gu9aQAOxlRD5W3C9PiU",
      authDomain: "github-readme-generator.firebaseapp.com",
      projectId: "github-readme-generator",
      storageBucket: "github-readme-generator.appspot.com",
      messagingSenderId: "174732363213",
      appId: "1:174732363213:web:39bb9793eb3c9fd5937084",
      measurementId: "G-R6SB0CV2NX"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const provider = new GoogleAuthProvider();
// console.log(app)

const auth = getAuth();

document.getElementById("google").addEventListener("click",function(){

// const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    localStorage.setItem("user",user.displayName)
    localStorage.setItem("Auth","Monu Singh")
    window.location.href = "index.html"; 
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    // console.log(errorCode)
    // console.log(errorMessage)
    // console.log(email)
  });
})


const provider1 = new GithubAuthProvider();
// import { getAuth, signInWithPopup,} from "firebase/auth";

document.getElementById("github").addEventListener("click",function(){
// const auth = getAuth();
signInWithPopup(auth, provider1)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user.displayName +"Hai")
    localStorage.setItem("user",user.displayName)
    localStorage.setItem("Auth","Monu Singh")
    window.location.href = "index.html"; 
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
})


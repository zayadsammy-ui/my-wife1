function surprise(){
    for(let i=0;i<120;i++){
        let heart = document.createElement("div");
        heart.className="heart";
        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"%";
        heart.style.fontSize=(Math.random()*25+10)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),4000);
    }

    alert("بحبك يا سميه ❤️");






}









 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAyRvD-YkOILYvqEkaYQFW7khuGpGL1tBs",
    authDomain: "somaya-love.firebaseapp.com",
    projectId: "somaya-love",
    storageBucket: "somaya-love.firebasestorage.app",
    messagingSenderId: "100003980502",
    appId: "1:100003980502:web:7a63028e8d2f032f855577",
    measurementId: "G-C9GJVWW5WE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//Initialize Firebase
var config = {
     apiKey: "AIzaSyDuGktFJMyjBjgexGI7s4MDXFC76B5pAh0",
     authDomain: "divac-cv.firebaseapp.com",
     databaseURL: "https://divac-cv.firebaseio.com",
     storageBucket: "divac-cv.appspot.com",
    };
firebase.initializeApp(config);

//produce nav list
firebase.database().ref('/nav').once('value').then(function(snapshot) {
  var navList = snapshot.val();
  var navListTarget = document.getElementById('navList');   
    for(var key in navList){
        navListTarget.innerHTML+='<li><a href="#'+key+'">'+key+'</a></li>';
    }
});
//Initialize Firebase
var config = {
     apiKey: "AIzaSyDuGktFJMyjBjgexGI7s4MDXFC76B5pAh0",
     authDomain: "divac-cv.firebaseapp.com",
     databaseURL: "https://divac-cv.firebaseio.com",
     storageBucket: "divac-cv.appspot.com",
    };
firebase.initializeApp(config);

(function(){
    Router = (function(){
        var router = void 0;
        var list   = void 0;
        function Router(){
            router = document.getElementById('router');
        }
        Router.prototype.add  = function(obj){
            list = obj; 
            //Object.keys(obj);//[].map.call(xxx,function(input){return yyy;});
        }
        Router.prototype.page = function(){
            var hash = window.location.href.match(/#[a-zA-Z0-9]*/g);
            var tagName = (hash==null?null:hash[0].substr(1));
            if(tagName != null && !(list[tagName]===undefined)){
               $('#navList li a').removeClass('currentHash');
               $('#navList li a[href="#'+tagName+'"]').addClass('currentHash');
                
               router.innerHTML = '<div>yo '+tagName+'</div>';
            }
            else{
                console.log('no hashtag');
            }
        }
        return Router;
    })();
    window.router = new Router();
}).call(this);

$(document).ready(function(){
    firebase.database().ref('/nav').once('value').then(function(snapshot) {
      var navList = snapshot.val();
      var navListTarget = document.getElementById('navList');   
      router.add(navList);
      for(var key in navList){
        navListTarget.innerHTML+='<li class="liBox"><a href="#'+key+'">'+key+'</a></li>';
      }
      router.page();
    });
});

$(window).on('hashchange', function() {
	router.page();
});



//function mySandwich(param1, param2, callback) {
//    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
//    if (callback && typeof(callback) === "function") {
//        callback();
//    }
//}
//
//mySandwich('ham', 'cheese', function(){console.log('vegetable');});



(function (window) {


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

 
var firstLetter = names[i].charAt(0);
var firstLetter1 = names[i].charAt(0).toLowerCase();

 
if (firstLetter1 === 'j' || firstLetter === 'J') {
 
   byeSpeaker.speak(names[i]);
  
}
else {
   
   helloSpeaker.speak(names[i]);
  
}

}
window.names=names;
}
)(window);

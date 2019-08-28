
function play(){
  if (miles < 11){
    var random = Math.floor(Math.random()*3+1);
    document.getElementById('conteur').innerHTML = random;
    var car1 = document.getElementById('car1');
    miles = miles + random;
    car1.style.left = miles*100+'px';
    console.log(miles)
    if (miles>= 11){
      alert('Joueur 1, Vous avez Gagner!');
    }
  }
}
var miles = 0;

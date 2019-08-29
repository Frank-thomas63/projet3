
function play(){
  if (miles < 11){
    var random = Math.floor(Math.random()*3+1);
    document.getElementById('conteur').innerHTML = random;
    var car1 = document.getElementById('car1');
    miles = miles + random;
    car1.style.left = miles*100+'px';
    console.log(miles)
    if (miles>= 11){
      car1.style.left = 1100+'px';
      alert('Joueur 1, Vous avez Gagner!');
    }
  }
}
var miles = 0;

function play2(){
  if (miles2 < 11){
    var random2 = Math.floor(Math.random()*3+1);
    document.getElementById('conteur2').innerHTML = random2;
    var car2 = document.getElementById('car2');
    miles2 = miles2 + random2;
    car2.style.left = miles2*100+'px';
    console.log(miles2)
    if (miles2>= 11){
      car2.style.left = 1100+'px';
      alert('Joueur 2, Vous avez Gagner!');
    }
  }
}
var miles2 = 0;

function play2(){
  if (miles2 < 11){
    var random2 = Math.floor(Math.random()*3+1);
    document.getElementById('conteur2').innerHTML = random2;
    var car2 = document.getElementById('car1');
    miles2 = miles2 + random2;
    car2.style.left = miles2*100+'px';
    console.log(miles2)
    if (miles2>= 11){
      alert('Joureur 2, Vous avez Gagner!');
    }
  }
}
var miles2 = 0;

let turn   = document.getElementById("turn");
let boxes  = document.querySelectorAll("#main div");
let x_or_0 = 0;

function WinnerBoxes (b1,b2,b3) {
  b1.classList.add("win");
  b2.classList.add("win");
  b3.classList.add("win");

  turn.innerHTML = b1.innerHTML + " Won Congrat";
}
  
function GetWin() {
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");
  let box3 = document.getElementById("box3");
  let box4 = document.getElementById("box4");
  let box5 = document.getElementById("box5");
  let box6 = document.getElementById("box6");
  let box7 = document.getElementById("box7");
  let box8 = document.getElementById("box8");
  let box9 = document.getElementById("box9");

  if ( box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
         WinnerBoxes (box1,box2,box3);
         stopPlay ();
  } else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
         WinnerBoxes (box4,box5,box6);
         stopPlay ();
  } else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        WinnerBoxes (box7,box8,box9);
        stopPlay ();
  } else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        WinnerBoxes (box1,box5,box9);
        stopPlay ();
  }else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        WinnerBoxes (box3,box5,box7);
        stopPlay ();
  }else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        WinnerBoxes (box1,box4,box7);
        stopPlay ();
  }else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        WinnerBoxes (box2,box5,box8);
        stopPlay ();
  }else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        WinnerBoxes (box3,box6,box9);
        stopPlay ();
  }
};

  for(let i=0; i<boxes.length;i++){
  boxes[i].onclick=box;
}

function box(){
  if (this.innerHTML !== "X" && this.innerHTML !== "0") {
  if (x_or_0 %2 == 0) {
    this.innerHTML = "X";
    turn.innerHTML = "0 Turn Now";
    x_or_0 += 1;
    GetWin();
  }
  else{
    this.innerHTML = "0";
    turn.innerHTML = "X Turn Now";
    x_or_0 += 1;
    GetWin();
  }
 }
};
   
function remove(){
 let clean = document.querySelectorAll("#main div");
 let stop = document.querySelector(".container");
   for(let i=0; i<clean.length; i++){
     clean[i].classList.remove("win");
     clean[i].innerHTML="";
 }
    stop.classList.remove("bord");
};

function stopPlay () {
  let stop = document.querySelector(".container");
  stop.classList.add("bord");
};
'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

const btnNEW = document.querySelector('.btn--new');
const btnROLL = document.querySelector('.btn--roll');
const btnHOLD = document.querySelector('.btn--hold');

const cur1 = document.getElementById('current--0');
const cur2 = document.getElementById('current--1');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let playing = true;

let scores = [0,0];

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentscore = 0;
let activeplayer = 0;

const changeplayer = ()=>{
    currentscore = 0;
    activeplayer = activeplayer === 0? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

//adding eventlistener to roll dice button
 btnROLL.addEventListener('click', function () {

    if(playing){
     //generating random number for dice
     const dex = Math.trunc( Math.random() * 6) + 1;

     //displaying dice
     dice.classList.remove('hidden');
     dice.src = `dice-${dex}.png`;

     if(dex!=1){
         currentscore += dex;
         document.getElementById(`current--${activeplayer}`).textContent = currentscore;
     }
     else{
         document.getElementById(`current--${activeplayer}`).textContent = 0;
         changeplayer();
     }
    }
 });

 btnHOLD.addEventListener('click',()=>{

    if(playing){
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    //changeplayer();

    if(scores[activeplayer]>=100){
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        playing = false;
        dice.classList.add('hidden');
    }
    else{changeplayer();}

    }
 });

 btnNEW.addEventListener('click',()=>{
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
    playing = true;
    dice.classList.remove('hidden');
    scores = [0,0];
    score0.textContent = 0;
    score1.textContent = 0;
    currentscore = 0;
 });
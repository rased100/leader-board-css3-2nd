// 1. hw:
document.getElementById("top-player").style.color = "red";
document.getElementById("top-blog").style.color = "red";

// 2.hw: 
// document.getElementsByClassName("player").style.backgroundColor = "blue";
// document.querySelector('.player').style.backgroundColor = 'blue';

const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = "blue";
}
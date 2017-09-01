window.alert("You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.");

function randomNumberGenerator(range) {
  "use strict";
  return Math.round(Math.random() * range);
}

var character = {
  strength: 0,
  stealth: 0,
  
  profession: window.prompt("What were you before the war? (Choose from: soldier, doctor, or politician)")
};

window.console.log(character.profession);
if (character.profession === "politician") {
  character.stealth = 5;
  window.console.log("1");
}
if (character.profession === "soldier") {
  character.strength = 5;
  character.stealth = 5;
  window.console.log("2");
}
if (character.profession === "doctor") {
  character.health = 5;
  window.console.log("3");
}
var weapons = ["arrow", "shovel", "baseball bat"];

var myWeapon = window.prompt("Being that it is the zombie apocalypse, you decide to search for a weapon first. After surveying your surroundings you notice and grab a weapon. Please choose one among Arrow, Shovel and Baseball Bat").toLowerCase();

window.console.log(myWeapon);

var choice = window.prompt("You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie?").toLowerCase();

if (choice === "attack") {
  if (character.stealth >= 5 && (randomNumberGenerator(weapons.length) === weapons.indexOf(myWeapon))) {
    window.alert("You won!!");
  } else {
    window.alert("You lost!");
  }
} else if (choice === "sneak") {
  if (character.stealth >= 5) {
    window.alert("You won!!");
  } else {
    window.alert("You lost");
  }
}
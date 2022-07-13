import fetchDataFromChuckNorisApi from "./functions/fetchDataFromChuckNorisApi";
import fetchJokeFromChuckNorisApiKnop from "./functions/chuckNorisJokeMetKnop";

console.log("Script is running");

//joke_knop//
export const randomJokeButton = document.getElementById('random-joke-button');
randomJokeButton.addEventListener("click", fetchJokeFromChuckNorisApiKnop);

//console log met parameters//
fetchDataFromChuckNorisApi('animal');

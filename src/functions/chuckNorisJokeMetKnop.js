import axios from "axios";

// async function fetchDataFromChuckNorisApi() {
//
// }

////JokeDoorKnop//
const URI = `https://api.chucknorris.io`
const endpoint = `/jokes/random`

 const fetchJokeFromChuckNorisApiKnop = async () => {
     try {
         const response = await axios.get(`${ URI }${ endpoint }`);
         const displayNode = document.getElementById('Insert-Joke-Here');
         displayNode.innerHTML = '';
         displayNode.innerHTML = `${response.data.value}`
         console.log ( response.data.value );
     } catch ( e ) {
         console.error( e );
     }
 }

export default fetchJokeFromChuckNorisApiKnop;

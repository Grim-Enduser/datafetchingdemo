import axios from "axios";

// async function fetchDataFromChuckNorisApi() {
//
// }

////JokeDoorKnop//
// const URI = `https://api.chucknorris.io`
// const endpoint = `/jokes/random`
// // const endpoint = `/jokes/random?category={category}`
//
// const fetchJokeFromChuckNorisApi = async () => {
//     try {
//         const response = await axios.get(`${ URI }${ endpoint }`);
//         const displayNode = document.getElementById('Insert-Joke-Here');
//         displayNode.innerHTML = '';
//         displayNode.innerHTML = `${response.data.value}`
//         console.log ( response.data.value );
//     } catch ( e ) {
//         console.error( e );
//     }
// }


//met parameters in de try const ipv in een const endpoint(bv params -> category//
const fetchJokeFromChuckNorisApi = async ( category ) => {

    const URI = `https://api.chucknorris.io`
    const endpoint = `/jokes/random`

    try {
        const response = await axios.get(`${ URI }${ endpoint }`, {
            params: {
                category: category
            }
        });
        //let hieronder op welke response.etc je uitstuurt, als je een parameter wil die bv geen value is maar data krijg je andere dingen terug
        // Ook kun je natuurlijk binnen deze respons.data. etc ook een array aanspreken met [].value ); //
        console.log ( response.data.value );
    } catch ( e ) {
        console.error( e );
    }
}


// export default fetchJokeFromChuckNorisApi;
//
// const fetchJokeFromChuckNorisApi = async ( category ) => {
//
//     const URI = `https://api.chucknorris.io`
//     const endpoint = `/jokes/random?category=${ category }`
//
//     try {
//         const response = await axios.get(`${ URI }${ endpoint }`);
//         console.log ( response.data.value );
//     } catch ( e ) {
//         console.error( e );
//     }
// }


export default fetchJokeFromChuckNorisApi;
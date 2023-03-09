import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const btnFindMovie = document.querySelector(".find-movie-btn-app");
btnFindMovie.addEventListener("click", findMovie);

async function findMovie() {
    // Generate random number
    const LIMIT_OF_MOVIES = 20000;
    const randomNumber = Math.floor(Math.random() * LIMIT_OF_MOVIES) + 1;

    try {
        const movieInformation = await axios
            .get(`${BASE_URL}${randomNumber}?api_key=${API_KEY}`)
            .then((response) => response.data);
    } catch (e) {
        console.log(e.message);
    }
}

import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const btnFindMovie = document.querySelector(".find-movie-btn-app");
btnFindMovie.addEventListener("click", findMovie);

async function findMovie() {
    // Generate random number
    const LIMIT_OF_MOVIES = 20000;
    const randomNumber = Math.floor(Math.random() * LIMIT_OF_MOVIES) + 1;

    const containerMovies = document.querySelector(".container-movies-app");
    containerMovies.style.display = "grid";

    try {
        const movie = await axios
            .get(`${BASE_URL}${randomNumber}?api_key=${API_KEY}&language=pt-BR`)
            .then((response) => response.data);

        containerMovies.innerHTML = `
            <img class='poster-movie' src='${IMG_URL}/${movie.poster_path}' alt=${movie.title} Poster />
            <h2 class='title-movie'>${movie.title}</h2>
            <p>${movie.overview}</p>
        `;
    } catch (e) {
        console.log(e.message);
    }
}

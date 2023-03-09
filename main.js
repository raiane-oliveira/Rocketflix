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
            .get(`${BASE_URL}${randomNumber}?api_key=${API_KEY}&${language}`)
            .then((response) => response.data);

        let descriptionMovie = movie.overview
            ? movie.overview
            : "Sinopse faltando.";
        let posterURL = movie.poster_path
            ? `${IMG_URL}/${movie.poster_path}`
            : "assets/missing-image.svg";

        containerMovies.innerHTML = `
            <img class='poster-movie' src=${posterURL} alt=${movie.title} Poster />
            <h2 class='title-movie'>${movie.title}</h2>
            <p>${descriptionMovie}</p>
        `;
        console.log(movie.poster_path);
    } catch (e) {
        containerMovies.innerHTML = `
            <img class='missing-poster-movie' src='assets/missing-image.svg' alt='Not found Image'>
            <h2 class='title-movie'>Ops, nenhum filme encontrado :( <br>Tente de novo!</h2>
        `;
    }
}

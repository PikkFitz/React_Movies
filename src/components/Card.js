import React from 'react';


const Card = ({ movie }) => {  // { movie } --> Les accolades sont nécessaires pour avoir accès directement à toutes les données de movie 
    // (sans accolade il aurait fallu faire movie.movie pour accéder aux données)

    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");  // date.split("-") --> Pour couper la date à chaque tiret "-"
        return [dd, mm, yy].join("/")  // On remet la date dans l'ordre ([dd, mm, yy]) et on place un "/" entre chaque partie
    }

    const genreFinder = () => {  // Pour les genres
        let genreArray = [];  // On créé un tableau
        for (let i = 0; i < movie.genre_ids.length; i++) {  // On parcourt tous les genres (toutes les cases du tableau movie.genre_ids)
            switch (movie.genre_ids[i]) {  // Si l'id dans la case du tableau movie.genre_ids = un des cas, alors on met le genre dans le tableau genreArray
                case 28:
                    genreArray.push(`Action`);
                    break;
                case 12:
                    genreArray.push(`Aventure`);
                    break;
                case 16:
                    genreArray.push(`Animation`);
                    break;
                case 35:
                    genreArray.push(`Comédie`);
                    break;
                case 80:
                    genreArray.push(`Policier`);
                    break;
                case 99:
                    genreArray.push(`Documentaire`);
                    break;
                case 18:
                    genreArray.push(`Drame`);
                    break;
                case 10751:
                    genreArray.push(`Famille`);
                    break;
                case 14:
                    genreArray.push(`Fantasy`);
                    break;
                case 36:
                    genreArray.push(`Histoire`);
                    break;
                case 27:
                    genreArray.push(`Horreur`);
                    break;
                case 10402:
                    genreArray.push(`Musique`);
                    break;
                case 9648:
                    genreArray.push(`Mystère`);
                    break;
                case 10749:
                    genreArray.push(`Romance`);
                    break;
                case 878:
                    genreArray.push(`Science-fiction`);
                    break;
                case 10770:
                    genreArray.push(`Téléfilm`);
                    break;
                case 53:
                    genreArray.push(`Thriller`);
                    break;
                case 10752:
                    genreArray.push(`Guerre`);
                    break;
                case 37:
                    genreArray.push(`Western`);
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre) => <li key={genre}>{genre}</li>);
        // On transforme le tableau genreArray en un nouveau tableau mais en enveloppant les genres dans un <li> (et en leur donnant une clé)
    };

    const addStorage = () => {  // Pour ajouter des films aux coups de coeur
        let storedData = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
        // Si la page "window.localStorage.movies" existe, on l'utilise (et on sépare les id des films par des virgules), sinon c'est un tableau vide

        if (!storedData.includes(movie.id.toString())) {  // Si l'id du film n'existe pas dans storedData
            storedData.push(movie.id);  // On ajoute l'id du film à storedData (sans écraser car "push")
            window.localStorage.movies = storedData;  // Et on stock storedData dans le local storage (window.localStorage.movies)
        }
        
    }

    return (
        <div className="card">
            {/* IMAGE */}
            <img
                src={movie.poster_path ? "https://image.tmdb.org/t/p/original/" + movie.poster_path : "./img/poster.jpg"}
                // Si l'image existe sur l'API on va la chercher, sinon on met une immage par défaut (./img/poster.jpg)
                alt={`affiche ${movie.title}`}
            />
            {/* TITRE */}
            <h2>{movie.title}</h2>
            {/* DATE */}
            {movie.release_date ? <h5>Sorti le : {dateFormater(movie.release_date)}</h5> : null}
            {/* NOTE */}
            <h4>{movie.vote_average}/10 <span>⭐</span></h4>
            {/* GENRE */}
            <ul>
                {movie.genre_ids ? genreFinder() : null}
            </ul>
            {/* SYNOPSIS */}
            {movie.overview ? <h3>Synopsis</h3> : ""}
            <p>{movie.overview}</p>
            {/* BOUTON COUP DE COEUR */}
            <div className="btn" onClick={() => addStorage()}>Ajouter aux coups de coeur</div>

        </div>
    );
};

export default Card;
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Form = () => {

    const [moviesData, setMoviesData] = useState([]);

    const [search, setSearch] = useState("code");  // Pour stocker la recherche

    const [sortGoodBad, setSortGoodBad] = useState(null);  // Pour trier pour notes croissantes ou décroissantes

    useEffect(() => {  // On récupère les données via l'API
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=fb980dda3a2daa2ea308bd7153006b67&query=${search}&language=fr-FR`)  
            // Lien de l'API avec une recherche --> ${search} = recherche
            // Copier l'url dans un navigateur pour voir comment sont retournées les données
            .then((res) => setMoviesData(res.data.results));
    }, [search]);  // Avec le callback [search] --> On relance la recherche à chaque fois que search est modifiée (car onChange dans l'input)

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input
                        type="text"
                        placeholder="Entrez le titre d'un film"
                        id="search-input"
                        onChange={e => setSearch(e.target.value)}  // On stock la recherche dans setSearch
                    />
                    <input type="submit" value="Rechercher" />
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id='goodToBad' onClick={() => setSortGoodBad("goodToBad")}>
                        Top<span>➔</span>
                    </div>
                    <div className="btn-sort" id='badToGood' onClick={() => setSortGoodBad("badToGood")}>
                        Flop<span>➔</span>
                    </div>
                </div>
            </div>
            <div className="result">
                {moviesData
                    .slice(0, 12)  /* slice(0, 12) --> Pour afficher seulement 12 résultats */
                    // eslint-disable-next-line
                    .sort((a, b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.vote_average - a.vote_average  /* On tri du mieux noté au moins bien noté */
                        }
                        else if (sortGoodBad === "badToGood") {
                            return a.vote_average - b.vote_average  /* On tri du moins bien noté au mieux noté */
                        }

                    })
                    .map((movie) => {
                        return (
                            <Card movie={movie} key={movie.id} />
                        )
                    })}
            </div>
        </div>
    );
};

export default Form;
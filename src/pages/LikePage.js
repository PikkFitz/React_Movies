import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from "axios";
import Card from '../components/Card';

const LikePage = () => {

    const [listData, setListData] = useState([]);

    useEffect(() => {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
        // Si la page "window.localStorage.movies" existe, on l'utilise et on sépare les id à chaque virgule en les mettant dans un tableau (split(","))
        // Sinon c'est un tableau vide

        for (let i = 0; i < moviesId.length; i++) {
            axios
                .get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=fb980dda3a2daa2ea308bd7153006b67`)
                // Lien de l'API avec id de film --> ${moviesId[i]} = id du film
                // Copier l'url dans un navigateur pour voir comment sont retournées les données
                // On va chercher les données du film par id
                .then((res) => setListData((data) => [...data, res.data]))
                // On met le resultat (données du film (data)) dans setListData 
                // Sans écraser les données des films précédents car on récupère les données précédentes avec "...data" auxquelles on ajoute res.data (données du film)
        }
        
    }, [])

    return (
        <div className='user-list-page'>
            <Header />
            <h2>Coups de coeur <span>❤️</span></h2>
            <div className="result">
                {listData.length > 0 ? (  // Si listData a des données
                    listData.map((movie) => <Card movie={movie} key={movie.id} />)
                ) : (  // Si listData est vide
                    <h2>Aucun coup de coeur pour le moment...</h2>
                )}
            </div>
        </div>
    );
};

export default LikePage;
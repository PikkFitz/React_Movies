import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const LikePage = () => {

    const [listData, setListData] = useState([]);

    useEffect(() => {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
        // Si la page "window.localStorage.movies" existe, on l'utilise et on sépare les id à chaque virgule en les mettant dans un tableau (split(","))
        // Sinon c'est un tableau vide
        
        for (let i=0; i< moviesId.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=fb980dda3a2daa2ea308bd7153006b67`)
            // Lien de l'API avec id de film --> ${moviesId[i]} = id du film
        }
        
        
    })

    return (
        <div className='user-list-page'>
            <Header />
            <h2>Coups de coeur <span>❤️</span></h2>
            <div className="result">

            </div>
        </div>
    );
};

export default LikePage;
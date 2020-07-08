import React, { useState, createContext } from 'react'
import { movies } from './data'

export const MoviesContext = createContext();

export const MoviesProvider = props => {
    const [movie, setMovie] = useState(movies);
    return (
        <div>
            <MoviesContext.Provider value={[movie, setMovie]}>
                {props.children}
            </MoviesContext.Provider>
        </div>
    )
}

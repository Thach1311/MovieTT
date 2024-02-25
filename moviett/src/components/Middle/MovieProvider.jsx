import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [selectedMovieSlug, setSelectedMovieSlug] = useState('');

    return (
        <MovieContext.Provider value={{ selectedMovieSlug, setSelectedMovieSlug }}>{children}</MovieContext.Provider>
    );
};

export const useMovieContext = () => {
    return useContext(MovieContext);
};

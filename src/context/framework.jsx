"use client"
import React, { createContext, useState, useContext } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
export function AppProvider({ children }) {
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedFrameworks, setSelectedFrameworks] = useState([]);

    const value = {
        selectedLanguages,
        setSelectedLanguages,
        selectedFrameworks,
        setSelectedFrameworks
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Create a custom hook to use the AppContext
export function useAppContext() {
    return useContext(AppContext);
}

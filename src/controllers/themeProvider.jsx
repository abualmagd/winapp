import React, { useEffect, useState } from "react";


export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        console.log('theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.classList.add('light');
        } else {
            root.classList.remove('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);


    const value = {
        theme,
        onToggleTheme: toggleTheme
    };


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}



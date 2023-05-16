
import NodeCache from 'node-cache';
import { createContext } from 'react';


// Create a new cache instance
const cache = new NodeCache();

// Create a new context for the cache
export const CacheContext = createContext(cache);


export const CacheProvider = ({ children }) => {

    return <CacheContext.Provider value={cache}>
        {children}
    </CacheContext.Provider>
}
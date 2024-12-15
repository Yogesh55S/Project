/* eslint-disable react/prop-types */
// context/ItemContext.js
import { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]); // Shared item list

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    return (
        <ItemContext.Provider value={{ items, addItem }}>
            {children}
        </ItemContext.Provider>
    );
};
